import { buildElement } from './creates.js';
// se visualiza lo que se publica la ventana de descripcion, lo publicado y el like
// se muestra el nav bar de cerrar sesion
// botone like, editar o eliminar 
export default () => {
    const viewPost = document.getElementById('contentHome');// creando el div en HTML
    viewPost.appendChild(buildElement('FORM', 'Iniciar sesión', '', 'form-post')); // añadir al div (con appendChild) cada uno de los elementos que se crean con el build Element
    viewPost.appendChild(buildElement('INPUT', '', 'text', 'form-post'));
    viewPost.appendChild(buildElement('BUTTON', 'Publicar', '', 'form-post'));

    viewPost.appendChild(buildElement('BUTTON', 'Galeria', '', 'form-post'));

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
    `*/
    const divElem = document.createElement('div');
    divElem.innerHTML = viewPost;

    return divElem;
}