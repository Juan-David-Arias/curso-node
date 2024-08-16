const os = require('os');

console.log(os.arch()); // la arquitectura
console.log(os.platform()); // plataforma
console.log(os.cpus().length); // cantidad de nucleos
console.log(os.constants); // señales y errores del sistema


const SYZE = 1024
function kb(bytes) {
    return bytes/ SYZE
}
function mb(bytes) {return kb(bytes)/ SYZE }
function gb(bytes) {return mb(bytes)/ SYZE }
function Tb(bytes) {return gb(bytes)/ SYZE }

console.log(os.freemem()); // espacio de ram
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(Tb(os.freemem()));

console.log(gb(os.totalmem())); //memoria total


