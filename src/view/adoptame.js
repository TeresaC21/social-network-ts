export default () => {
    const viewAdopta = `
    <h2 class="text-center">Mascotitas</h2>
    <figure class="text-center">
    <img class="image" src="img/mascotas.jpeg" alt="mascotitas1">
    <img class="image" src="img/mascotas2.jpeg" alt="mascotitas2">
    </figure>`;

    const divElem = document.createElement('div');
    divElem.innerHTML = viewAdopta;

    return divElem;
}