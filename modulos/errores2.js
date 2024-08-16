function otraFuncion() {
    return serompe();
}

function serompe() {
    return 3 + Z;
} 


try {
    otraFuncion();
} catch(err) {
    console.error(' vaya , tenemos un fallo....');
    console.error(err);
    console.log('lo hemos capturado');
}

console.log('esto de aqui esta al final');