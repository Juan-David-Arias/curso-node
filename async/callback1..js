function hola(nombre , micallback) {
    setInterval(function () {
        console.log('hola'+ nombre);
        micallback();
    },2000); 
}

function adios(nombre , otrocallback) {
    setInterval(function () {
        console.log('Adios'+ nombre);
        otrocallback();
    },1000); 
}

console.log('iniciando proceso...');
hola( ' david ' , function () {
    adios( ' david ' , function () {
        console.log('terminando proceso...'); 
    });
});