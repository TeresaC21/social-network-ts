import 
    formEnter
from '../controler/todo.js'; // hacer que se importe la funcion formEnter esta en store.js

export default () => { 
    const viewWelcome = 
    // Formulario de iniciar sesion
    buildElement('FORM', 'Iniciar sesión', '', 'form-email'); 
    buildElement('INPUT', '', 'email', 'form-email');
    buildElement('INPUT', '', 'password', 'form-email');
    buildElement('BUTTON', 'Iniciar Sesion', '', 'form-email'); // iniciar sesion te envia al home, muestra todo tu perfil

    buildElement('BUTTON', 'Facebook', '', 'form-facebook'); // al hacer click te enviara a pag facebook
    buildElement('BUTTON', 'Google', '', 'form-google'); // al hacer click te enviara a pag google

    buildElement('a', 'Registrar', '', 'form-registrarse'); // al hacer click te enviaria al formulario de registro

    const divElem = document.createElement('div');
    divElem.innerHTML = viewWelcome;

    return divElem;
}

// prueba
