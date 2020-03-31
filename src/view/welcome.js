import {
  enterUser,
} from '../model/data.js';

export default () => {
  const viewWelcome = document.createElement('div');
  viewWelcome.innerHTML = `
    <form id="form-emailEnter">
      <h2 class="petsbook"> PETSBOOK </h2>
        <figure class="text-center">
            <img class="wall-img" src="img/tortu.png" alt="pet wall">
         </figure>
      
          <input name="email" type="email" id="formInputEmail" placeholder="email"></br>
          <input name="password" type="password" id="formInputPassw" placeholder="password" minlength=1></br>
          <button class="buttons" type="submit" id="btn-email"><a href="#/home">Iniciar sesión</a></button></br>

      <button class="buttons btnreg" type="submit" id="register"><a href="#/register">regístrate</a></button></br></br>
    <div id=containerEmpty>
    </div>
   </form>`;

  // ********************* ENTER TO THE ACCONT **************************** 
  const initEnterUser = (event) => {
    event.preventDefault();
    const email = document.querySelector('#formInputEmail').value;
    const password = document.querySelector('#formInputPassw').value;
    enterUser(email, password)
      .then((user) => {
        console.log(user);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
      });
  };

  viewWelcome.querySelector('#btn-email').addEventListener('click', initEnterUser)
  viewWelcome.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');
  return viewWelcome;
};