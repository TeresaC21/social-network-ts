
export default (doc) => {
      let trCreate = document.createElement('tr');
      trCreate.innerHTML = ` 
      <td class="td">${doc.descripcion}</td>
      <td><button id="delt"><a href="#/home">Eliminar</button></td>
      <br>
      `;
      return trCreate;
    };