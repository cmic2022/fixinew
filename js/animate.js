let slide_animate = document.querySelectorAll(".slide_animate");

function mostrarScroll () {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < slide_animate.length; i ++ ) {
        let alturaAnimado = slide_animate[i].offsetTop;
        if(alturaAnimado - 700 < scrollTop){
            slide_animate[i].style.opacity= 1;
            slide_animate[i].classList.add("slide-top")
        }
    }
}

window.addEventListener('scroll', mostrarScroll);