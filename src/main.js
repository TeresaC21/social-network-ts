import { changeView } from './router.js';

export const init = () => {
  //console.log(window.location.hash);
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
