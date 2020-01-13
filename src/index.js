import {
    example
} from './example.js';
example();

// ************************ CREATE ELEMENT DYNAMIC FOR FORMS EMAIL ******************************
const buildElement = (typeElement, insertText, typeInput) => {
    let variable = document.createElement(typeElement);
    if (typeElement === 'FORM') {
        variable.innerHTML = insertText; // We can write here parametro -insertText and down the text
        variable.id = 'form-register-email';
        document.getElementById('form-create').appendChild(variable);
    } else if (typeElement === 'INPUT' && typeInput === 'email') {
        variable.setAttribute('type', 'email');
        variable.setAttribute('placeholder', 'Email');
        variable.name = 'email';
        document.getElementById('form-register-email').appendChild(variable);
    } else if (typeElement === 'INPUT' && typeInput === 'password') {
        variable.setAttribute('type', 'password');
        variable.setAttribute('placeholder', 'Password');
        variable.name = 'password';
        document.getElementById('form-register-email').appendChild(variable);
    } else if (typeElement === 'BUTTON') {
        variable.innerHTML = insertText;
        variable.setAttribute('type', 'submit');
        document.getElementById('form-register-email').appendChild(variable);
    }
}
//  CREATE DYNAMIC FOR NEW USER 
    buildElement('FORM', 'THIS IS FORM OF REGISTER NEW USER', ''); // in three spacio we write the text
    buildElement('INPUT', '', 'email');
    buildElement('INPUT', '', 'password');
    buildElement('BUTTON', 'Login');
    

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