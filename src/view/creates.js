// Creando botones dinamicos
export const buildElement = (typeElement, insertText, typeInput, nameID, formId) => {
  const variable = document.createElement(typeElement);
  if (typeElement === 'FORM') {
    variable.innerHTML = insertText;
    variable.id = nameID;
    document.getElementById('form-create').appendChild(variable);
  } else if (typeElement === 'INPUT' && typeInput === 'email') {
    variable.setAttribute('type', 'email');
    variable.setAttribute('placeholder', 'Email');
    variable.name = 'email';
    //variable.id = formId;
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'INPUT' && typeInput === 'password') {
    variable.setAttribute('type', 'password');
    variable.setAttribute('placeholder', 'Password');
    variable.name = 'password';
    //variable.id = formId;
     // variable.id = nameID;
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'BUTTON') {
    variable.innerHTML = insertText;
    variable.setAttribute('type', 'submit');
    //variable.setAttribute('href', typeHref);
    //variable.id = formId;
     // variable.id = nameID;
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'a') {
    variable.innerHTML = insertText;
    variable.setAttribute('href', '');
     //variable.id = formId;
   // variable.id = nameID;
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'INPUT' && typeInput === 'text') {
    variable.setAttribute('placeholder', '¿Algo nuevo para compartir?');
    variable.name = 'descripcion';
     //variable.id = formId;
   // variable.id = nameID;
    document.getElementById(nameID).appendChild(variable);
  }
  return variable;
};

