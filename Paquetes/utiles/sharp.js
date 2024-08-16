const sharp = require('sharp');

sharp('Bewe.png')
    .resize(80) // Cambia el tamaño de la imagen a 80 píxeles de ancho
    .grayscale() // Convierte la imagen a escala de grises
    .toFile('resized.png', (err, info) => {
        if (err) {
            console.error('Error al procesar la imagen:', err);
            return;
        }
        console.log('Imagen procesada con éxito:', info);
    });
