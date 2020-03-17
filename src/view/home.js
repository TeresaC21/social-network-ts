import {
  addPost, closed, postAll, 
} from '../model/store.js';

export default (user) => {
  const viewPost = document.createElement('div');
  viewPost.innerHTML = `
    <button class="buttons" type="submit" id="btnClosed"><a href="#/welcome">Sign Out</a></button></br>
    
    <h2 class="text-center">${user.email}</h2>
      <figure class="text-center">
        <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
      </figure>

  <form id="form-addPost">
      <input name="post" type="text" id="addPost" placeholder="¿Qué te gustaría compartir hoy?"></br>
      <button type="submit" id="btn-addPost"><a href="#/home">Publicar</button></br>
      
      <div>
        <button> Galeria </button>
      <select>
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
 // viewPost.querySelector('#publishedAll').add(postAll)
 // viewPost.querySelector('#btnX').addEventListener('click', deletes);

  viewPost.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
 /*  let image = viewPost.querySelector('.image');
  function gif() {
    setTimeout(() => {
      requestAnimationFrame(image) 
    }, 3000);
  }
  gif()         <h1 id="btnX">X</h1>*/
  
  return viewPost;
};
