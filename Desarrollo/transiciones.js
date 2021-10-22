// Declarando las funciones que ejecutan la transición y animación de los botones,
// desplazandose la imagen del boton hacia la izquierda hasta llegar al final 

function transicionBoton1() {

    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        train.style.left = timePassed / 5 + 'px';

        if (timePassed > 600) clearInterval(timer);

    }, 20);

}

function transicionBoton2() {

    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        train2.style.left = timePassed / 5 + 'px';

        if (timePassed > 676) clearInterval(timer);

    }, 20);

}