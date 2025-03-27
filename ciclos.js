// Un ciclo nos permite ejecutar un bloque de codigo tantas veces como la condición sea true

// Ciclo while
// El ciclo while nos va a permitir repetir un bloque de codigo tantas veces como la condición sea true
// Cuando la condición sea false, se dejará de ejecutar el ciclo while
// While significa mientras, si desde el inicio la condición del while es false, no se ejecuta el ciclo while
// Su sintaxis es la palabra reservada while seguido de parentesis y en ellos la condición
// Y seguido de llaves para definir el bloque de codigo del ciclo
let contador = 0, repeticiones = 5;
while (contador <= repeticiones) {
    console.log(contador++);    // Sin esta expresión (contador++) sería un ciclo infinito
    // Una iteración es la repetición de nuestro bloque de codigo
}
// Si el bloque de codigo del ciclo while solamente incluye una linea
// Se pueden omitir las llaves

// Ciclo do while
// El ciclo do while ejecuta al menos una vez su bloque de codigo y posteriormente se evalúa la condicion
// Sintaxis del ciclo do while
/**
do {   De manera inicial no estamos agregando la condición (a diferencia del ciclo while)
    console.log(contador++);
} while (contador <= repeticiones);
Una vez que cerramos el bloque de codigo agregamos la palabra reservada while seguido de la condicion
Por lo tanto el ciclo do while ejecuta al menos una vez su bloque de codigo
Debido a que la condición está al final del bloque
**/
do {
    console.log(contador++);
} while (contador <= repeticiones);
