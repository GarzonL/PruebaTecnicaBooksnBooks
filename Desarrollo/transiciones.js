var boton = document.getElementsByClassName('button1-s1')[0];
// var img1 = document.getElementById('img1');

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