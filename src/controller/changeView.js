import { components } from '../view/index-tres.js';
import Welcome from '../view/welcome.js';

export const changeView = (router) => {
  // console.log(router)
  const container = document.querySelector('#container');
  container.innerHTML = '';

  const formCreate = document.getElementById('form-create');
  formCreate.innerHTML = '';
  // lo insertamos en el elemento #form-create
  Welcome();

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
