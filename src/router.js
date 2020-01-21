import { components } from './view/index-tres.js';
import Welcome from './view/welcome.js';
import Post from './view/post.js';
import Register from './view/register.js';

export const changeView = (router) => {
  // console.log(router)
  const container = document.querySelector('#container');
  container.innerHTML = '';

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

  switch (router) {
    case '#/': {
      return container.appendChild(components.welcome()); }
    case '#/adoptarme': {
      return container.appendChild(components.adoptame());
    }
    default:
      break;
  }
  console.log(router);
  return null;
};
