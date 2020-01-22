

// con esta funcion infoUser en archivo model store.js para mostrar correo e imagen del usuario

// boton cerrar sesion en nav bar 

// ventanita descripcion, boton imagen, boton publicar

export default () => {
    let watchUser =`
     <button id="btnClosed">Sign off</button>
    `;
    const divElem = document.createElement('div');
    divElem.innerHTML = watchUser;

    return divElem;
        //document.querySelector('#btnClosed').addEventListener('click', closed);
    }


    const viewHome = `
    <h2 class="text-center">!HOLA BIENVENIDO¡</h2>
    <figure class="text-center">
    <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
    </figure>`

    return inicioElem;

    