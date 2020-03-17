import Welcome from './welcome.js';
import Register from './register.js';
import Home from './home.js';
/* import {
  controller,
} from '../router.js'; */

const components = {
  welcome: Welcome,
  register: Register,
  home: Home,
};


/* const vista = {

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
      form.reset();
      // console.log();
      // controller.agregarMarcador(newEnter);
    });
  },

  initRegi: () => {
    const form = document.getElementById('form-emailRegistra');
    console.log(form);

     form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPublic = {
          descripcion: form.descripcion.value,
        }
        form.reset();
        controller.welcomeRo(newPublic);
      });
  },
}; */
/*
const btn = viewPost.querySelector('#btn-addPost');
btn.addEventListener('click', addPost);
console.log('desde wieW HOME'); */

export {
  components,
};
