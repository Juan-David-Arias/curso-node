const { log } = require('console');
const fs = require('fs');

function leer( ruta , cb ) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    })
}

// leer(__dirname + '/archivo.txt', console.log) //para leer un archivo


///////////////////////////////////////////////////////

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err){
        if (err) {
            console.log(' no he podido escribirlo ', err);
        } else {
            console.log(' se ha escrito  correctamente');
        }
    });
}

// escribir(__dirname + '/archivo1.txt', 'soy leyenda ', console.log); //para escribir un archivo

////////////////////////////////////////////////////////////

function borrar(ruta, cb) {
    fs.unlink(ruta, (err) => {
        if (err) {
            console.error('Error al borrar el archivo:', err);
            return cb(err); // Llamamos al callback con el error
        }
        console.log('Archivo eliminado correctamente:', ruta);
        cb(null); // Llamamos al callback sin errores
    });
}

borrar(__dirname + '/archivo1.txt', console.log);