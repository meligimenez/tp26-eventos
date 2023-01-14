window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');

    article.classList.add('fondoTransparente');

    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'pink';
    })

    titulo.addEventListener('mouseout', () => {
        titulo.style.color = 'black';
    })

}