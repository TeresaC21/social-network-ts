export default () => {
    function watchUser() {
        let content = document.getElementById('contentUser');
        content.innerHTML = `
    <p>WELCOME</p>
     <button id="btnClosed">Sign off</button>
    `;
    const divElem = document.createElement('div');
    divElem.innerHTML = watchUser;

    return divElem;
        //document.querySelector('#btnClosed').addEventListener('click', closed);
    }
}
