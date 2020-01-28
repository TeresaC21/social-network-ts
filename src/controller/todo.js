import {
  registerAccount,
  enterUser,
  closed,
} from '../model/store.js';
import {
  viewWelcome,
} from '../view/welcome.js';
import {
  Router,
} from '../view/router.js';

const dataEnter = getEnter(email);
viewWelcome();
// Ejecutar funcion enterUser (iniciar sesión) al hacer (click/submit)
// export const formEnter = document.querySelector('#form-email');
// formEnter.addEventListener('submit', enterUser, false);
/*
document.querySelector('#btnClosed').addEventListener('click', closed);

export const signInAuth = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
*/
// Ejecutar funcion registerAccount (registrarse) al hacer (click/submit)
// export const formRegisterUser = document.querySelector('#form-register-email');
// formRegisterUser.addEventListener('submit', registerAccount, false);

// Al hacer click en botón sign Off, ejecuta la función closed (cerrar sesión)
document.querySelector('#btnClosed').addEventListener('click', closed);

const btnPost = document.querySelector('#btn-addPost');
btnPost.addEventListener('click', addPost);

