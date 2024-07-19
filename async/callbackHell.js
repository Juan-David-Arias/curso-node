function hola(nombre, micallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        micallback(nombre); // Pasamos el nombre al callback
    }, 2000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('blabbla bla....');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otrocallback(); // Llamamos al callback sin pasar argumentos
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback); // Pasamos el callback correctamente
    }
}

console.log('Iniciar proceso');
hola('david', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Proceso terminado');
    });
});
