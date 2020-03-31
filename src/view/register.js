import {
  registerAccount,
} from '../model/data.js';

export default () => {
  const viewRegister = document.createElement('div');
  viewRegister.innerHTML = `
  <form id="form-emailRegistra">

       <h2 class="text-center">Si eres nuevo, registrate aquí</h2>
        <figure class="text-center">
          <img class="image" src="img/lion.png" alt="perrito saluda">
        </figure>

          <input name="nombre" type="text" id="formInputName-reg" placeholder="Name"></br>
          <input name="email" type="email" id="formInputEmail-reg" placeholder="email"></br>
          <input name="password" type="password" id="formInputPassw-reg" placeholder="Password"></br>
  
      <button class="buttons" type="submit" id="btn-email-reg"><a href="#/home">Registrar</a></button></br>
      <button class="buttons" type="submit" id="btn-email-Welcome"><a href="#/welcome">Iniciar sesión</a></button></br>
   </form>`;

  // ********************* REGISTER NEW ACCOUNT ****************************
  const initReg = (event) => {
    event.preventDefault();
    const email = document.querySelector('#formInputEmail-reg').value;
    const password = document.querySelector('#formInputPassw-reg').value;
    const name = document.querySelector('#formInputName-reg').value;
    registerAccount(email, password, name)
      .then(() => {
        window.location.hash = '#/home';
      })
      .catch((error) => {
        // Handle Errors here.
        window.location.hash = '#/register';
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }

  viewRegister.querySelector('#btn-email-reg').addEventListener('click', initReg);
  viewRegister.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-direction-column', 'vh-100');

  return viewRegister;
};
//<input name="password" type="password" id="formInputPassw-confirm" placeholder="Confirm Password"></br>