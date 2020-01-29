import {
  components, vista,
} from './view/components.js';
import { currentUser } from './model/store.js';

console.log(vista);
console.log(vista.initEnter);

export const controller = {
  welcomeRoute: () => {
    vista.initEnter();
  },
  regiRoute: () => {
    vista.initRegi();
  },
  homeRoute: () => {
    vista.initPost();
  },
};


export const changeView = (route) => {
  // console.log(router)
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '':
      return container.appendChild(components.welcome());
    case '#':
    case '#/':
    case '#/welcome': {
      container.appendChild(components.welcome());
      controller.welcomeRoute();
      break;
    }
    case '#/register': {
      container.appendChild(components.register());
      controller.regiRoute();
      break;
    }
    case '#/home': {
      // container.appendChild(components.home());
      // controller.homeRoute();
      const user = currentUser();
      return container.appendChild(components.home(user));
    }
    default:
      break;
  }
  console.log(route);
  return null;
};

/*
  const formCreate = document.getElementById('form-create');
  formCreate.innerHTML = '';
  // lo insertamos en el elemento #form-create
  Welcome();

  const formCreatePost = document.getElementById('contentHome');
  formCreatePost.innerHTML = '';
  // lo insertamos en el elemento #form-post
  Post();

  const formCreateRegister = document.getElementById('contentUser');
  formCreateRegister.innerHTML = '';
  // lo insertamos en el elemento #form-post
  Register();
*/
// export const controlador = {
// init: () => {
// vista.init()
// },
