// Creando botones dinamicos
export const buildElement = (typeElement, insertText, typeInput, nameID) => {
  const variable = document.createElement(typeElement);
  if (typeElement === 'FORM') {
    variable.innerHTML = insertText;
    variable.id = nameID;
    document.getElementById('form-create').appendChild(variable);
  } else if (typeElement === 'INPUT' && typeInput === 'email') {
    variable.setAttribute('type', 'email');
    variable.setAttribute('placeholder', 'Email');
    variable.name = 'email';
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'INPUT' && typeInput === 'password') {
    variable.setAttribute('type', 'password');
    variable.setAttribute('placeholder', 'Password');
    variable.name = 'password';
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'BUTTON') {
    variable.innerHTML = insertText;
    variable.setAttribute('type', 'submit');
    document.getElementById(nameID).appendChild(variable);
  } else if (typeElement === 'a') {
    variable.innerHTML = insertText;
    variable.setAttribute('href', '');
    document.getElementById(nameID).appendChild(variable);
  }
  return variable;
};
