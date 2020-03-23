import {
  components
} from './view/components.js';
import { infoUser } from './model/store.js';

export const changeView = (route) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '':
     container.appendChild(components.welcome());
     break
    case '#':
    case '#/':
    case '#/welcome': {
      container.appendChild(components.welcome());
      break;
    }
    case '#/register': {
      container.appendChild(components.register());
      break;
    }
    case '#/home': {
      infoUser((user) => {
        if (user) {
          container.appendChild(components.home(user));
        } else {
          // redirigir al login
          container.appendChild(components.welcome());
        }
      })
       break;
    }
    default:
      break;
  }
  console.log(route);
  return null;
};
