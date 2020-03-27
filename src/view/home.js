import {
  addPost, closed, postAll, 
} from '../model/data.js'; // NO - CONTROLLER

export default (user) => {
  const viewPost = document.createElement('div');
  viewPost.innerHTML = `
  <form id="form-addPost">
      <button class="buttons-h" type="submit" id="btnClosed"><a href="#/welcome">Cerrar sesión</a></button></br>
    
      <h2 class="text-center">${user.email}</h2>
         <figure class="text-center">
           <img class="image" src="img/dogi.png" alt="perrito saluda">
          </figure>

            <input name="post" type="text" id="addPost" placeholder="¿Qué te gustaría compartir hoy?"></br>
           
            <button id="btn-addPost"><a href="#/home">Publicar</button></br>
            
            <div class="div-home">
              <button class="buttons-h"> Galeria </button>
                <select class="buttons-h">
                   <option>Publico</option>
                  <option>Privado</option>
               </select>
            </div></br>

        <div id="published">  </div>
        <div id="publishedAll">  </div>
  </form>
  `;
  viewPost.querySelector('#btn-addPost').addEventListener('click', addPost);
  viewPost.querySelector('#btnClosed').addEventListener('click', closed);
  postAll()

  viewPost.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');  
  return viewPost;
};
