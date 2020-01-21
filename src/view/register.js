import { buildElement } from './creates.js';

export default () => {
  
// Formulario de registro
const viewRegistrar = document.getElementById('form-create');
viewRegistrar.appendChild(buildElement('FORM', 'Registrar', '', 'form-register-email')); 
viewRegistrar.appendChild(buildElement('INPUT', '', 'email', 'form-register-email'));
viewRegistrar.appendChild(buildElement('INPUT', '', 'password', 'form-register-email'));
viewRegistrar.appendChild(buildElement('BUTTON', 'Registrar', '', 'form-register-email')); // iniciar sesion te envia al home, muestra todo tu perfil

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistrar;

  return divElem;
}