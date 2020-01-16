export default () => {
    const viewHome = `
    <h2 class="text-center">!HOLA BIENVENIDO¡</h2>
    <figure class="text-center">
    <img class="image" src="img/perrito-saluda.gif" alt="perrito saluda">
    </figure>`

    const inicioElem = document.createElement('div');
    inicioElem.innerHTML = viewHome;

    return inicioElem;
}