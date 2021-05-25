const enlacesHeader = document.querySelector('.enlaces-mobile');
const icono = document.querySelector('#iconoMenu');
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function(){
    enlacesHeader.classList.toggle('menuDos');
    cambiarIcono()
})

window.addEventListener('scroll', function(){
    enlacesHeader.classList.remove('menuDos');
    cambiarIcono()
})

enlacesHeader.addEventListener('click', function(){
    enlacesHeader.classList.remove('menuDos');
    cambiarIcono()
})

function cambiarIcono(){
    if(enlacesHeader.classList.contains('menuDos') == true){
        icono.classList.remove('fa-bars');
        icono.classList.add('fa-times-circle');
    } else{
        icono.classList.remove('fa-times-circle');
        icono.classList.add('fa-bars');
    }
}