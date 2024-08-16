console.log("algo");
console.info("info");
console.error("error");
console.warn("warn");

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b:"otras"
    }
]

console.table(tabla);

console.group('conversacion');
console.log('hola todos');
console.log('buenos dias');
console.log('bla bla blaa');
console.log('adios');

console.groupEnd('conversacion');

console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
