import {
  validateEmail,
} from '../controller/authHandler.js';

export const model = {};

// Crear nueva cuenta de correofdsf
export function registerAccount(event) {
  event.preventDefault();
  const email = document.querySelector('#formInputEmail-reg').value;
  const emailValidationResult = validateEmail(email);
  const password = document.querySelector('#formInputPassw-reg').value;
  const name = document.querySelector('#formInputName-reg').value;
  console.log(emailValidationResult);

  if (emailValidationResult === true) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {
        window.location.hash = '#/home';
      })
      .catch((error) => {
        // Handle Errors here.
        window.location.hash = '#/register';
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  } else {
    window.location.hash = '#/register';
    alert('Please enter a valid email');
  }
}

// Iniciar sesión
export function enterUser(event) {
  event.preventDefault();
  const email = document.querySelector('#formInputEmail').value;
  const emailValidationResult = validateEmail(email);
  const password = document.querySelector('#formInputPassw').value;
  console.log(emailValidationResult);

  if (emailValidationResult === true) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => { //console.log(user);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        // Handle Errors here.
        window.location.hash = '#/welcome';
        const errorCode = error.code;
        const errorMessage = error.message;
        if (emailValidationResult === false) {
          window.location.hash = '#/welcome';
          alert('Please enter an email');
          window.location.hash = '#/welcome';
          alert('Please enter the password');
        }
        console.log('funciona model/store ENTER');
      });
  }
}

// Informacion del usuario
export function infoUser(cb) {
  firebase.auth().onAuthStateChanged(cb);

}
// Datos del usuario
export function currentUser() {
  infoUser();
  const user = firebase.auth().currentUser;
  return user;
}

// Cerrar sesión
export function closed() {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
      window.location.reload() = '#/welcome'
    })
    .catch((error) => {
      console.log(error);
    });
}

// **************************** ADD POST FIRESTORE *********************************
export const addPost = () => {
  const db = firebase.firestore();
  const postUser = document.querySelector('#addPost').value;
  db.collection('post').add({
      descripcion: postUser,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.querySelector('#addPost').value = '';
      //document.querySelector('#published').innerHTML = postUser;
      window.location.hash = '#/home';
     //document.querySelector('#publishedAll').value = '';
    })
    .catch((error) => {
      console.error('Error adding document:', error);
    });
}

export const postAll = () => {
  const db = firebase.firestore();
  db.collection("post").onSnapshot((querySnapshot) => {
    document.querySelector('#publishedAll').innerHTML = '';
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data().descripcion}`, 'PRUE');
      let trCreate = document.createElement('tr');
      trCreate.innerHTML = ` 
      <th>${doc.id}</li>
      <td>${doc.data().descripcion}</td>
      <td><button id="delt"><a href="#/home">Eliminar</button></td> <td><button>Editar</button></td>
      <br>
      `;
      trCreate.querySelector('#delt').addEventListener('click', () => deletePost(doc.id))
      document.querySelector('#publishedAll').appendChild(trCreate);
    });
  })
}

export const deletePost = (id) => {
  console.log(id, 'ID CONSOLE');
  const db = firebase.firestore();
  db.collection('post').doc(id).delete()
    .then(function () {
      console.log("Document successfully deleted!");
     // document.querySelector('#publishedAll').value = location.reload();
      window.location.hash = '#/home';
      //location.reload();
    }).catch(function (error) {
      console.error("Error removing document: ", error);
      window.location.hash = '#/home';
    });
}

// ***********************INICIAR SESIÓN CON FACEBOOK Y GOOGLE**************************************
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const facebookLogin = () => firebase.auth().signInWithRedirect(providerFacebook);
export const googleLogin = () => firebase.auth().signInWithRedirect(providerGoogle);

export const redirectResult = () => firebase.auth().getRedirectResult().then((result) => {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
  }
  // The signed-in user info.
  const user = result.user;
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  console.log(errorCode);
  console.log(errorMessage);
  console.log(email);
  console.log(credential);
});

// git