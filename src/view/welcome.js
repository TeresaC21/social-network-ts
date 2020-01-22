import {
  buildElement
} from './creates.js';
import {
  enterUser
} from '../model/store.js';

// import { formEnter } from '../controler/todo.js'; // hacer que se importe la funcion formEnter esta en store.js

export default () => {
  const viewWelcome = document.createElement('div');
 
  viewWelcome.innerHTML = `
    <form id="form-emailEnter">
      <input name="email" type="email" id="formInputEmail" placeholder="email"></br>
      <input name="password" type="password" id="formInputPassw" placeholder="password"></br>
      <button type="submit" id="btn-email"><a href="#/post">Iniciar sesión</a></button></br>
      <button type="submit" id="register">regístrate</button></br></br>
   </form>`
  //const divElem = document.createElement('div');
  //divElem.innerHTML = viewWelcome;

  let btn = viewWelcome.querySelector("#btn-email");
  btn.addEventListener('click', enterUser);

  //viewWelcome.querySelector("#btn-email").addEventListener("click", (e) => {
  // e.preventDefault();
  //logInFn(userEmail.value, userPassword.value);

  document.getElementById('form-create').appendChild(viewWelcome);
  //return viewWelcome;
  //const formEnter = document.querySelector('#btn-email');
  //formEnter.addEventListener('click', enterUser);

  //return divElem;

};


/*

document.getElementById('form-create');// creando el div en HTML
  viewWelcome.appendChild(buildElement('FORM', 'Iniciar sesión', '', 'form-email')); // añadir al div (con appendChild) cada uno de los elementos que se crean con el build Element
  viewWelcome.appendChild(buildElement('INPUT', '', 'email', 'form-email'));
  viewWelcome.appendChild(buildElement('INPUT', '', 'password', 'form-email'));
  viewWelcome.appendChild(buildElement('BUTTON', 'Iniciar Sesion', '', 'form-email')); // iniciar sesion te envia al home, muestra todo tu perfil
  // Ejecutar funcion enterUser (iniciar sesión) al hacer (click/submit)
const formEnter = document.querySelector('#form-email');
formEnter.addEventListener('submit', enterUser);
  
  const buttonFacebook = document.createElement('div');
  const domString = '<div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>';
  buttonFacebook.innerHTML = domString;
  viewWelcome.appendChild(buttonFacebook.firstChild);
  
  const buttonGoogle = document.createElement('div');
  const domDiv = '<div class="g-signin2" data-onsuccess="onSignIn"></div>';
  buttonGoogle.innerHTML = domDiv;
  viewWelcome.appendChild(buttonGoogle.firstChild);

  buildElement('a', 'Registrar', '', 'form-email'); // al hacer click te enviaria al formulario de registro  
*/