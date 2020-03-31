import {
  validateEmail
} from '../controller/valid.js'; // YES - AND HERE CONTROLLER

// ************************** CREATE NEW ACCOUNT *************************************
//export const model = {};
export function registerAccount(email, password, name) {
  const emailValidation = validateEmail(email);
  if (emailValidation === true) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name,
          //photoUrl: string
        });
      })
  } else {
    return Promise.reject(new Error('Por favor llena los campos vacios'))
  }
}

// ***************************** ENTER LOGIN USER *************************************
export function enterUser(email, password) {
  const emailValidation = validateEmail(email); //console.log(emailValidation);
  if (emailValidation === true) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
   /*  .then((user)=>{
      console.log(user);
    })*/
  } else {
    return Promise.reject(new Error('Por favor llena los campos vacios'));
  } 
}

// ********************************** INFO USER ***************************************
export function infoUser(cb) {
  firebase.auth().onAuthStateChanged(cb);
}

export function currentUser() {
  infoUser();
  const user = firebase.auth().currentUser;
  return user;
}

// ********************************** SIGN OUT ***************************************
export function closed() {
  return firebase.auth().signOut()
    
}

// **************************** ADD POST FIRESTORE ***********************************
//ADD
export const addPost = (postUser) => {
  const db = firebase.firestore();
  return db.collection('post').add({
    descripcion: postUser,
  })
}

// ********* QUERY SNAPSHOT - CONSULTA DATA ********
export const postAll = (cb) => {
  const db = firebase.firestore();
  //try {
  const unsubscribe = db.collection("post").onSnapshot(cb);
  return unsubscribe;
  /* } catch (e) {
    if (unsubscribe) {
      unsubscribe()
    }
  } */
}

// ******************************* DELETE POST ***************************************
export const deletePost = (id) => {
  console.log(id, 'ID CONSOLE');
  const db = firebase.firestore();
  db.collection('post').doc(id).delete()
    .then(function () {
      console.log("Document successfully deleted!");
      window.location.hash = '#/home';
    }).catch(function (error) {
      console.error("Error removing document: ", error);
      window.location.hash = '#/home';
    });
}

// ********************INICIAR SESIÓN CON FACEBOOK Y GOOGLE***************************
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

const createPost = (texto) => {
  return {
    texto: texto,
    fechaCreacion: new Date(),
    userId: currentUser(),
    publico: 'public',
    likes: 0
  }
}

// git