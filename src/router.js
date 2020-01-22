import {
  components
} from './view/components.js';
import Welcome from './view/welcome.js';
import Post from './view/post.js';
import Register from './view/register.js';

export const changeView = (route) => {
  // console.log(router)
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '': {
    }
    case '#/': {
      return container.appendChild(components.welcome());
    }
    case '#/welcome': {
      return container.appendChild(components.welcome());
    }
    case '#/register': {
      return container.appendChild(components.register());
    }
    case '#/post': {
      return container.appendChild(components.post());
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
//export const controlador = {
// init: () => {
// vista.init()
//},