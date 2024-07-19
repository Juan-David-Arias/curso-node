async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 2000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('blabbla bla....');
            resolve(nombre);
        }, 1000);
    });  
}

async function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Adios ', nombre);
            resolve(nombre);
        }, 1000);
    })
}


async function main() {
    let nombre = 'david'
    await hola(nombre);
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('terminamos...');
}
console.log('empezamos...');
main();
