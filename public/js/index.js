window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let  menu = document.getElementById('menu');
    let logoDH = document.querySelector('.logoDH');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';

    
    logoDH.addEventListener('click', () => {
        menu.classList.toggle('mostrar')
    });

    logoDH.addEventListener('mouseover', () => {
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    });

    menu.addEventListener('mouseout', (e) => {
        if(!/li|ul|a/.test(e.target.localName)){
            menu.classList.remove('mostrar')
        }
    });


}
