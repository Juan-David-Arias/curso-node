function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 2000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('blabbla bla....');
            //resolve(nombre);
            reject('error error')
        }, 1000);
    });  
}

function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Adios ', nombre);
            resolve(nombre);
        }, 1000);
    })
}

console.log('iniciando proceso...')
hola('david')
    .then(hablar)
    .then(adios)
    .then((nombre)=> {
        console.log('terminado proceso...');
    })
    .catch(error => {
        console.error('hay un error');
        console.error(error);
    });
