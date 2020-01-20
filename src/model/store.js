// Crear nueva cuenta de correo
export function registerAccount(event) {
  event.preventDefault();
  const user = event.target.email.value;
  const passwordUser = event.target.password.value;
  firebase.auth().createUserWithEmailAndPassword(user, passwordUser)

    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // alert('error');
    });
}
// Iniciar sesión
export function enterUser(event) {
  event.preventDefault();
  const userRegistered = event.target.email.value;
  const passwordUserRegistered = event.target.password.value;

  firebase.auth().signInWithEmailAndPassword(userRegistered, passwordUserRegistered)

    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // ...
    });
}

// Informacion del usuario
export function infoUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      watchUser();
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
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
export function closed() {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
    });
}
