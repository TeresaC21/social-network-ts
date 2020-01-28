
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()); // regular expression
}

export function validateEmailLength(email) {
  if (email.length < 4) {
    alert('Please enter an email address longer than 3 characters.');
  }
}

export function validatePasswordLength(password) {
  if (password.length < 4) {
    alert('Please enter a password longer than 3 characters.');
  }
}

/* const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGoogle = new firebase.auth.GoogleAuthProvider();

export const facebookLogin = () => firebase.auth().signInWithRedirect(providerFacebook);
export const googleLogin = () => firebase.auth().signInWithRedirect(providerGoogle);

*/


/*
const dataEnter = getEnter(email);
viewWelcome();
// Ejecutar funcion enterUser (iniciar sesión) al hacer (click/submit)
// export const formEnter = document.querySelector('#form-email');
// formEnter.addEventListener('submit', enterUser, false);
/*
document.querySelector('#btnClosed').addEventListener('click', closed);

export const signInAuth = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

// Ejecutar funcion registerAccount (registrarse) al hacer (click/submit)
// export const formRegisterUser = document.querySelector('#form-register-email');
// formRegisterUser.addEventListener('submit', registerAccount, false);

// Al hacer click en botón sign Off, ejecuta la función closed (cerrar sesión)
document.querySelector('#btnClosed').addEventListener('click', closed);

const btnPost = document.querySelector('#btn-addPost');
btnPost.addEventListener('click', addPost);

*/