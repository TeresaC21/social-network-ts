import { buildElement } from './creates.js';
// import { formEnter } from '../controler/todo.js'; // hacer que se importe la funcion formEnter esta en store.js

export default () => {
  const viewWelcome = document.getElementById('form-create');// creando el div en HTML
  viewWelcome.appendChild(buildElement('FORM', 'Iniciar sesión', '', 'form-email')); // añadir al div (con appendChild) cada uno de los elementos que se crean con el build Element
  viewWelcome.appendChild(buildElement('INPUT', '', 'email', 'form-email'));
  viewWelcome.appendChild(buildElement('INPUT', '', 'password', 'form-email'));
  viewWelcome.appendChild(buildElement('BUTTON', 'Iniciar Sesion', '', 'form-email')); // iniciar sesion te envia al home, muestra todo tu perfil
  
  
  /*
  const buttonFacebook = document.createElement('div');
  const domString = '<div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div>';
  buttonFacebook.innerHTML = domString;
  viewWelcome.appendChild(buttonFacebook.firstChild);
  */
  const buttonGoogle = document.createElement('div');
  const domDiv = '<div class="g-signin2" data-onsuccess="onSignIn"></div>';
  buttonGoogle.innerHTML = domDiv;
  viewWelcome.appendChild(buttonGoogle.firstChild);

  buildElement('a', 'Registrar', '', 'form-email'); // al hacer click te enviaria al formulario de registro

  return viewWelcome;
};
