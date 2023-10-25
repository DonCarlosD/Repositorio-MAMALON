import React from 'react'


// Función para calcular el área de un círculo dado su radio
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

// Ejemplo de uso
const radio = 5;
const area = calcularAreaCirculo(radio);
console.log(`El área del círculo con radio ${radio} es ${area.toFixed(2)}`);

export default page