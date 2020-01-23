/*
import { signInAuth } from "./controller/todo.js"

const changeHash = (hash) =>  {
  location.hash = hash;
}

export const registerEmail = () => {
  const email = event.target.email.value;
  const password = event.target.password.value;
  signInAuth(email, password)
    .then(() => changeHash('/welcome'))
    .catch(() => {})
}*/

// Crear nueva cuenta de correo
export function registerAccount(event) {
  event.preventDefault();
  console.log('funciona model/store REGISTRAR');
 /* const user = event.target.email.value;
  const passwordUser = event.target.password.value;
  firebase.auth().createUserWithEmailAndPassword(user, passwordUser)

    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // alert('error');
    });*/
}
// Iniciar sesión
export function enterUser() {
  console.log('funciona model/store ENTER');
  
 /* const userRegistered = event.target.email.value;
  const passwordUserRegistered = event.target.password.value;

  firebase.auth().signInWithEmailAndPassword(userRegistered, passwordUserRegistered)

    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // ...
    });*/
}
// Informacion del usuario
export function infoUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      watchUser();
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      console.log('no existe usuario activo');
      // User is signed out.
      // ...
    }
  });
}
infoUser();


// mostrar con DOM info del usuario


// Cerrar sesión
export function closed() {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
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


// **************************** ADD POST FIRESTORE *********************************
export const addPost = (newPost, name) => {
  console.log('funciona desde model/store ADDPOST');
  
  return db.collection("posts").add({
      descripcion: newPost,
      first: name
      
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

export const downPost = () => {
return db.collection("posts").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});
}