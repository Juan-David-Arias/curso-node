function otraFuncion() {
    return serompe();
}

function serompe() {
    return 3 + z
} 

function seRompeAsincrono(cb) {
    setTimeout(function(){
        try {
            return 3 + z;
        }catch (err) {
            console.error(' error en mu funcion');
            cb(err);
            console.log('lo hemos capturado');
        }  
    })
}


try {
    seRompeAsincrono(function(err){
        console.log(err.message)
    });

} catch(err) {
    console.error(' vaya , tenemos un fallo....');
    console.error(err);
    console.log('lo hemos capturado');
}

console.log('esto de aqui esta al final');