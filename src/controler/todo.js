import {
    registerAccount,
    enterUser,
    closed
} from './store.js';

// ************************ CREATE ELEMENT DYNAMIC FOR FORMS EMAIL ******************************
const buildElement = (typeElement, insertText, typeInput, nameID) => {
    let variable = document.createElement(typeElement);
    if (typeElement === 'FORM') {
        variable.innerHTML = insertText; // We can write here parametro -insertText and down the text
        variable.id = nameID;
        document.getElementById('form-create').appendChild(variable);
    } else if (typeElement === 'INPUT' && typeInput === 'email') {
        variable.setAttribute('type', 'email');
        variable.setAttribute('placeholder', 'Email');
        variable.name = 'email';
        document.getElementById(nameID).appendChild(variable);
    } else if (typeElement === 'INPUT' && typeInput === 'password') {
        variable.setAttribute('type', 'password');
        variable.setAttribute('placeholder', 'Password');
        variable.name = 'password';
        document.getElementById(nameID).appendChild(variable);
    } else if (typeElement === 'BUTTON') {
        variable.innerHTML = insertText;
        variable.setAttribute('type', 'submit');

        document.getElementById(nameID).appendChild(variable);
    }
}

buildElement('FORM', 'REGISTRAR', '', 'form-register-email'); // in three spacio we write the text
buildElement('INPUT', '', 'email', 'form-register-email');
buildElement('INPUT', '', 'password', 'form-register-email');
buildElement('BUTTON', 'Registrar', '', 'form-register-email');

buildElement('FORM', 'ENTRAR', '', 'form-email'); // in three spacio we write the text
buildElement('INPUT', '', 'email', 'form-email');
buildElement('INPUT', '', 'password', 'form-email');
buildElement('BUTTON', 'Entrar', '', 'form-email');

// Ejecutar funcion registerAccount (registrarse) al hacer (click/submit) 
let formRegisterUser = document.querySelector('#form-register-email');
formRegisterUser.addEventListener('submit', registerAccount, false); // dinamico

// Ejecutar funcion enterUser (iniciar sesión) al hacer (click/submit) 
let formEnter = document.querySelector('#form-email');
formEnter.addEventListener('submit', enterUser, false); // NO dinamico

// Al hacer click en botón sign Off, ejecuta la función closed (cerrar sesión)
document.querySelector('#btnClosed').addEventListener('click', closed);
