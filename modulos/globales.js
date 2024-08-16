let i = 0;
let intervalo = setInterval(function () {
    console.log('¡HOLA');
    if ( i=== 3) {
        clearInterval(intervalo);
    }
    i++
}, 1000);

setImmediate(function () {
    console.log('Adios');
})

console.log(__dirname);

console.log(__filename);