// El tema de decisiones va a ser importante para poder decidir si nos vamos por un camino o por otro,
// Dependiendo de una condición que vamos a revisar, esta condición va a ser de tipo booleano

// Sentencia if
/*
if (condición - booleana) {
    bloque de código
}
*/
let numero = -9;
// La sintaxis de la sentencia if es la siguiente
// Vamos a utilizar la palabra reservada if y entre parentesis la condición booleana que es un valor de tipo logico (true o false)
// Y entre llaves todo el bloque de código del if que se ejecutará en caso de que la condición sea true
if (numero > 0) {   // Condición falsa, se omite la ejecución del bloque de codigo de la sentencia if
    console.log(`${numero} es un valor positivo`);  // Se omite y nos vamos directamente a la otra línea 
}

// Bloque else
// El bloque else básicamente nos va a servir para poder agregar algún código en caso de que la condición sea false
if (numero > 0) {
    console.log(`${numero} es un valor positivo`);
    // Si la condición de la sentencia if es true, se ejecuta este bloque
}
else {  // El bloque else es opcional, no necesariamente debemos poner un bloque else por cada sentencia if, pero si lo ponemos va a ser después de la sentencia if
    console.log(`${numero} es un valor negativo`);
    // Si la condición de la sentencia if es false, se ejecuta este otro bloque
}
// Solamente se ejecuta un bloque u otro pero no ambos

// Si la sentencia if o el bloque else se componen de una sola línea de código en sus bloques, se pueden omitir las llaves
if (numero < 0)
    console.log(`${numero} es un valor negativo`);
else
    console.log(`${numero} es un valor positivo`);
