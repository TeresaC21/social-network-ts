import {
    components
} from "../view/index-tres.js";

const changeView = (router) => {
    // console.log(router)
    const container = document.querySelector('#container');
    container.innerHTML = '';
    switch (router) {
        case '#/': {
            return container.appendChild(components.home());        };
        case '#/adoptarme': {
            return container.appendChild(components.adoptame());
    }
    default:
        break;
    }
      console.log(router)
}

export {
    changeView
}