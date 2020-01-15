import { changeView } from './view-controler/index-dos.js'

const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
}
window.addEventListener('load', init);