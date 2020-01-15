import {
    example
} from './example.js';
example();

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
/*  
const dynamicForm = (boolean) => {
    if(boolean === false) {
        //  CREATE DYNAMIC FOR NEW USER 
        buildElement('FORM', 'REGISTRAR', ''); // in three spacio we write the text
        buildElement('INPUT', '', 'email');
        buildElement('INPUT', '', 'password');
        buildElement('BUTTON', 'Registrar');
    
    } else if (boolean === true) {
        buildElement('FORM', 'ENTRAR', ''); // in three spacio we write the text
        buildElement('INPUT', '', 'email');
        buildElement('INPUT', '', 'password');
        buildElement('BUTTON', 'Entrar');
    }
}*/

/*const funcForm = () => {
    buildElement('FORM', 'REGISTRAR', ''); // in three spacio we write the text
    buildElement('INPUT', '', 'email');
    buildElement('INPUT', '', 'password');
    buildElement('BUTTON', 'Registrar');  
}

let btnRegistroEmail = document.querySelector('#btnRegistrar');
btnRegistroEmail.addEventListener('click', funcForm, false);
  */  
 // NO dinamico
// ************************** REGISTER NEW ACCOUNT FIREBASE ***************************
//let formRegister = document.querySelector('#form-email');
//formRegister.addEventListener('submit', registerAccount, false); // NO dinamico
let formRegisterUser = document.querySelector('#form-register-email');
formRegisterUser.addEventListener('submit', registerAccount, false); // dinamico

function registerAccount(event) {
    event.preventDefault();
    let user = event.target.email.value;
    let passwordUser = event.target.password.value;

    firebase.auth().createUserWithEmailAndPassword(user, passwordUser)
        //.then(function (result) {
        // alert('correcto');
        // })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            // alert('error');
        });
}

let formEnter = document.querySelector('#form-email');
formEnter.addEventListener('submit', enterUser, false); // NO dinamico

function enterUser(event){
    event.preventDefault();
    let userRegistered = event.target.emailRegistered.value;
    let passwordUserRegistered = event.target.passwordRegistered.value;

    firebase.auth().signInWithEmailAndPassword(userRegistered, passwordUserRegistered)
    
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

        // ...
      });
}

function infoUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo');
            watchUser();
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
            console.log('no existe usuario activo');
            
          // User is signed out.
          // ...
        }
      });     
}
infoUser();

function watchUser() {
    let content = document.getElementById('contentUser');
    content.innerHTML = `
    <p>WELCOME</p>
     <button id="btnClosed">Sign off</button>
    `;
    document.querySelector('#btnClosed').addEventListener('click', closed); 
}

function closed() {
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...');
    })
    .catch(function(error) {
    console.log(error);        
    })
}



/*

let irAregistro = document.querySelector('#btnRegistrar');

irAregistro.addEventListener('click', irHistory);

function irHistory() {
    
}

// ****** FORMULARIO 
    const buildElementForm1 = () => {
        let formulario1 = document.createElement('FORM');
            formulario1.innerHTML = 'REGISTRO'; 
            formulario1.id = 'form-register-email';
            document.getElementById('form-create').appendChild(formulario1);
        let inputEmail  = document.createElement('INPUT');
            inputEmail.setAttribute('type', 'email');
            inputEmail.setAttribute('placeholder', 'Email');
            inputEmail.name = 'email';
            document.getElementById('form-register-email').appendChild(inputEmail);
        let inputPassword  = document.createElement('INPUT');
            inputPassword.setAttribute('type', 'password');
            inputPassword.setAttribute('placeholder', 'Password');
            inputPassword.name = 'password';
            document.getElementById('form-register-email').appendChild(inputPassword);
        let buttonUno  = document.createElement('BUTTON');
            buttonUno.innerHTML = 'Registrar';
            buttonUno.setAttribute('type', 'submit');
            buttonUno.getElementById('form-register-email').appendChild(buttonUno);
        }
        buildElementForm1(); */

