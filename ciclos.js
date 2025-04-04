// Un ciclo nos permite ejecutar un bloque de codigo tantas veces como la condición sea true

// Ciclo while
// El ciclo while nos va a permitir repetir un bloque de codigo tantas veces como la condición sea true
// Cuando la condición sea false, se dejará de ejecutar el ciclo while
// While significa mientras, si desde el inicio la condición del while es false no se ejecutará el ciclo while
// Su sintaxis es la palabra reservada while seguido de parentesis y en ellos la condición
// Y seguido de llaves para definir el bloque de codigo del ciclo
let contador = 0, repeticiones = 5;
while (contador <= repeticiones) {
    console.log(contador++);    // Sin esta expresión (contador++) sería un ciclo infinito
    // Una iteración es la repetición de nuestro bloque de codigo
}
// Si el bloque de codigo del ciclo while solamente incluye una linea se pueden omitir las llaves

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

// Ciclo for
// Nos permite especificar cuantas veces queremos repetir un bloque de codigo
// Su sintaxis es la palabra reservada for y entre parentesis la primera seccion
// Donde vamos a poder declarar variables (como algun contador), pueden ser una o varias
// Esta primera seccion solamente se va a ejecutar una vez en la primera iteración
// Solamente en la primera iteración se van a crear estas variables
// La siguiente sección es la condición a evaluar, mientras esta condicion sea verdadera el ciclo for seguirá ejecutandose
// La ultima sección es para incrementar o decrementar (o cualquier expresión) la variable de la primera sección
// Por ultimo entre llaves el bloque de codigo del ciclo for
for (let contador = 0, repeticiones = 19; contador <= repeticiones; contador++) {
    console.log(contador);
}
// El orden de la ejecución del ciclo for es la siguiente
// En la primera ejecución se crean las variables como primer paso
// Como segundo paso se evalúa la condición, como tercer paso se ejecuta el bloque de codigo del ciclo for
// Como cuarto paso se incrementa o decrementa la variable segun el caso
// Después de la primera iteracion se repiten los pasos dos, tres, cuatro en el mismo orden (el paso uno ya no se ejecuta)
