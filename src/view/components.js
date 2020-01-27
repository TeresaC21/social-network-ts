import Welcome from './welcome.js';
import Register from './register.js';
import Home from './home.js';
import {controller} from '../router.js';

const components = {
  welcome: Welcome,
  register: Register,
  home: Home,
}
console.log(Home); // template string

const vista = {
 init: () => {
  const form = document.getElementById('form-addPost');
  console.log(form);
 }
 
  
/*
const btn = viewPost.querySelector('#btn-addPost');
btn.addEventListener('click', addPost);
console.log('desde wieW HOME');*/

}



export { components, vista };