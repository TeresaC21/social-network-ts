import {
    buildElement
} from './creates.js';
import {
    addPost
} from '../model/store.js';
// se visualiza lo que se publica la ventana de descripcion, lo publicado y el like
// se muestra el nav bar de cerrar sesion
// botone like, editar o eliminar 
export default () => {
    const viewPost = document.createElement('div');

    viewPost.innerHTML = `
  <form id="form-addPost">
      <input name="email" type="email" id="addPost" placeholder="¿Qué te gustaría compartir hoy?"></br>
      <button type="submit" id="btn-addPost">Publicar</button></br>

      <div>
      <button> Galeria </button>
      <select>
          <option>Publico</option>
          <option>Privado</option>
      </select>
      </div> 
      </br>
   </form>`

    let btn = viewPost.querySelector("#btn-addPost");
    btn.addEventListener('click', addPost);

    document.getElementById('contentHome').appendChild(viewPost);
}

/*
const viewPost = document.getElementById('contentHome');// creando el div en HTML
viewPost.appendChild(buildElement('FORM', '', '', 'form-post')); // añadir al div (con appendChild) cada uno de los elementos que se crean con el build Element
viewPost.appendChild(buildElement('INPUT', '', 'text', 'form-post'));
viewPost.appendChild(buildElement('BUTTON', 'Publicar', '', 'form-post'));

viewPost.appendChild(buildElement('BUTTON', 'Galeria', '', 'form-post'));*/

/*
    const botonSelect = document.getElementById('contentHome');
    butonSelect.innerHTML =
    `
        <div>
            <button> Galeria </button>
            <select>
                <option>Publico</option>
                <option>Privado</option>
            </select>
        </div> 
    </form>
  
    <!-- posts -->
    <section id="containerPost">
     
    </section>
    `
    const divElem = document.createElement('div');
    divElem.innerHTML = viewPost;

    return divElem;
}
*/