import {
  buildElement,
} from './creates.js';
import {
  addPost,
} from '../model/store.js';
// se visualiza lo que se publica la ventana de descripcion, lo publicado y el like
// se muestra el nav bar de cerrar sesion
// botone like, editar o eliminar

export default () => {
  const viewPost = document.createElement('div');
  
  viewPost.innerHTML = `

    <button id="btnClosed">Sign off</button>
    
    <h2 class="text-center">!HOLA BIENVENIDO¡</h2>
    <figure class="text-center">
      <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
    </figure>

  <form id="form-addPost">
      <input name="post" type="text" id="addPost" placeholder="¿Qué te gustaría compartir hoy?"></br>
      <button type="submit" id="btn-addPost">Publicar</button></br>

      <div>
      <button> Galeria </button>
      <select>
          <option>Publico</option>
          <option>Privado</option>
      </select>
      </div></br>

      <div id="published">
    
      </div>
      
   </form>
  `; 

  viewPost.classList.add('d-flex','justify-content-center','align-items-center','flex-direction-column','vh-100');

  // document.getElementById('contentHome').appendChild(viewPost);
  return viewPost;
};


// export default () => {
/*export const watchUser = `
     <button id="btnClosed">Sign off</button>
    
     <h2 class="text-center">!HOLA BIENVENIDO¡</h2>
    <figure class="text-center">
    <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
    </figure>
    `;
const divElem = document.createElement('div');
divElem.innerHTML = watchUser;*/

// return divElem;
// document.querySelector('#btnClosed').addEventListener('click', closed);
// }
/*
const viewPost = document.getElementById('contentHome');// creando el div en HTML
viewPost.appendChild(buildElement('FORM', '', '', 'form-post')); // añadir al div (con appendChild) cada uno de los elementos que se crean con el build Element
viewPost.appendChild(buildElement('INPUT', '', 'text', 'form-post'));
viewPost.appendChild(buildElement('BUTTON', 'Publicar', '', 'form-post'));

viewPost.appendChild(buildElement('BUTTON', 'Galeria', '', 'form-post'));
 */
