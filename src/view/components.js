import Welcome from './welcome.js';
import Register from './register.js';
import Home from './home.js';

const components = {
  welcome: Welcome,
  register: Register,
  home: Home,
};

/* const vista = {
  initRegi: () => {
    const form = querySelector('#btn-email-reg').addEventListener('click', initReg);
    //const form = document.getElementById('form-emailRegistra');
    //console.log(form);

    const initReg = (event) => {
    event.preventDefault();
    const email = document.querySelector('#formInputEmail-reg').value;
    const password = document.querySelector('#formInputPassw-reg').value;
    const name = document.querySelector('#formInputName-reg').value;
    registerAccount(email, password, name)
      .then(() => {
        window.location.hash = '#/home';
      })
      .catch((error) => {
        // Handle Errors here.
        window.location.hash = '#/register';
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }

     //form.addEventListener('submit', (e) => {
       // e.preventDefault();
        //const regUser = {
         // email: form.email.value,
          // password: form.password.value
        //}
        //form.reset();
       // controller.welcomeRo(email, password);
      //});
  },
},

initEnter: () => {
    const form = document.getElementById('form-emailEnter');
    console.log(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newEnter = {
        email: form.email.value,
        password: form.password.value,

      };
      console.log(newEnter);
      registerAccount(form.email.value, form.password.value, form.nombre.value)
      form.reset();
      // console.log();
      // controller.agregarMarcador(newEnter);
    });
  },

initPost: () => {
  const form = document.getElementById('form-addPost');
  console.log(form);

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newPublic = {
        descripcion: form.descripcion.value,
      }
      form.reset();
      controller.welcomeRo(newPublic);
    });
} */

export {
  components,
};
