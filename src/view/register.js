
export default () => {
  const viewRegistrar =
// Formulario de registro
buildElement('FORM', 'Registrar', '', 'form-register-email'); 
  buildElement('INPUT', '', 'email', 'form-register-email');
  buildElement('INPUT', '', 'password', 'form-register-email');
  buildElement('BUTTON', 'Registrar', '', 'form-register-email'); // iniciar sesion te envia al home, muestra todo tu perfil

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegistrar;

  return divElem;
}