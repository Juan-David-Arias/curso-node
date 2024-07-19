function hola(micallback) {
    setInterval(function () {
        console.log('estoy siendo asincrona');
        micallback();
    },1000); 
}
console.log('iniciando proceso...');
hola( function () {
    console.log('terminando proceso...'); 
});