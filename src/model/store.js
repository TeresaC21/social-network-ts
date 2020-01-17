


// Crear nueva cuenta de correo
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

// Iniciar sesión
function enterUser(event){
    event.preventDefault();
    let userRegistered = event.target.email.value;
    let passwordUserRegistered = event.target.password.value;

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

// Informacion del usuario
function infoUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe usuario activo');
            watchUser();
          // User is signed in.
          let displayName = user.displayName;
          let email = user.email;
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
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
function closed() {
    firebase.auth().signOut()
    .then(function(){
        console.log('Saliendo...');
    })
    .catch(function(error) {
    console.log(error);        
    })
}

export {
    registerAccount,
    enterUser,
    infoUser,
    closed
}