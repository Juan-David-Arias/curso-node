function serompe() {
    return 3 + Z
} 


try {
    serompe();
} catch(err) {
    console.error('¡Vaya, tenemos un fallo!');
    console.error(err.message); // Accedemos al mensaje de la excepción con err.message
    console.log('Hemos capturado la excepción');
}

console.log('Esto está al final del código');