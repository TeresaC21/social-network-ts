import {
  addPost,
  closed,
  postAll,
  deletePost
} from '../model/data.js'; // NO - CONTROLLER
import post from './post.js'

// Vamos a tener una sola funcion de desuscripcion activa por vez
let unsubscribePostsObserver = null;

export default (user) => {
  console.log(user);
  
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

  //  AT THE END THE FUNCTIONS ARE CALLED WITH ADDEVENTLISTENER

  // ********************* ADD POST ****************************
  const initAddPost = () => {
    const postUser = document.querySelector('#addPost').value;
    addPost(postUser)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        document.querySelector('#addPost').value = '';
        //document.querySelector('#published').innerHTML = postUser;
        window.location.hash = '#/home';
      })
      .catch((error) => {
        console.error('Error adding document:', error);
      });
  }

  // ********************* QUERY SNAPSHOT ****************************
  // si estoy volviendo a pintar los posts
  // me garantizo de dejar de observar los posts
  // de la pintada anterior
   if (unsubscribePostsObserver) {
    unsubscribePostsObserver();
    unsubscribePostsObserver = null;
  } 
 
  unsubscribePostsObserver = postAll((querySnapshot) => {
    //console.log(querySnapshot); // para traer el doc
    const publishedAll = document.querySelector('#publishedAll');
    publishedAll.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const trCreate = post(doc.data())
      publishedAll.appendChild(trCreate);
      trCreate.querySelector('#delt').addEventListener('click', () => deletePost(doc.id))
    });
  })
  
  // ***************************** SIGN OUT ****************************
  const initClosed = () => {
    // estoy cerrando sesion
    // me desuscribo de los posts
    unsubscribePostsObserver()
    unsubscribePostsObserver = null;
    closed()
      .then(() => {
        console.log('Saliendo...');
        // window.location.hash = '#/welcome'
        window.location.hash = '#/welcome';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  viewPost.querySelector('#btn-addPost').addEventListener('click', initAddPost);
  viewPost.querySelector('#btnClosed').addEventListener('click', initClosed);
  viewPost.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
  return viewPost;
};