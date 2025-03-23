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

// Bloque else if
// Nos sirve para agregar mas condiciones (ilimitadas) entre un bloque if y un else (en caso de que haya un bloque else)
if (numero > 0) {
    // Si esta condición es true se ejecuta este bloque
    console.log(`${numero} es un valor positivo`);
}
else if (numero < 0) {  // Bloque opcional
    // Si no es suficiente con la primera condición, se agrega esta segunda
    // Y en caso de que sea true se ejecuta únicamente este bloque else if y se omiten los demás bloques que vengan a continuación
    console.log(`${numero} es un valor positivo`);
}   // Podemos agregar cuantos bloques else if con nuevas condiciones necesitemos

else {  // El bloque else en caso de que exista debe ir hasta el final
    // En caso de que ninguna de las condiciones anteriores sea true, se ejecuta este bloque
    console.log(`${numero} es 0`);
}

// Operador ternario
// Es una simplificación de la sentencia if - else
// Su sintaxis es la siguiente
// condición ? caso true : caso false
// Normalmente se utiliza para una codigo que quepa en una sola linea, si es de mas lineas se recomienda un bloque if - else completo
console.log((numero > 0) ? 'es un valor positivo' : 'es cero o negativo');
// No son necesarios los parentesis en la condición pero es recomendable para indicar que es una condición booleana

// Ejercicio mayoría de edad con bloque if - else y operador ternario
const MAYORIA_DE_EDAD = 18;
let miEdad = 19;

if (miEdad >= MAYORIA_DE_EDAD) {
    console.log(`Mayor de edad ${miEdad}`);
}   // Se puede agregar otra condicion (bloque else if) en caso de que la edad sea menor que 0
else {
    console.log(`Menor de edad ${miEdad}`);
}
// Con el uso del operador ternario
console.log(miEdad >= MAYORIA_DE_EDAD ? `Mayor de edad ${miEdad}` : `Menor de edad ${miEdad}`)

// Sentencia switch
// Es una variante simplificada de la sentencia if - else
/*
Ejemplo con sentencia if - else

if (condicion) {
    Bloque de codigo
}
else if (condicion 2) {
    Bloque de codigo
}
else if (condicion 3) {
    Bloque de codigo
}
else { Se podría decir que else es una sentencia por default
    Bloque de codigo
}
*/

// Sintaxis de la sentencia switch
/*
Ejemplo con sentencia switch

El valor no es como tal una condición, es una variable a evaluar
switch (valor a evaluar) {
    case 1: Se revisa un caso (en caso de que el valor a evaluar sea exactamente igual a 1, por ejemplo)
        Y si es dicho caso, se ejecuta el bloque de codigo
        El valor a evaluar puede ser de cualquier tipo de dato no solo numerico
        Bloque de codigo
        break;  Con break rompemos la ejecución del caso 1
        Si no usaramos break se seguirían ejecutando los demás casos sin revisar si coincide con el caso o no
        No es requerido y si no se agrega se seguirán evaluando los demás casos hasta encontrar una sentencia break
        O hasta que termine la sentencia switch

    case 2:
        Bloque de codigo
        break;

    default:    default es similar a la sentencia else del bloque if - else
        Si llegamos al final de la sentencia switch es porque ningun caso coincidió
        Y entonces ya no se revisa ninguna condicion y se ejecuta el bloque de la sentencia default
        Bloque de codigo
}
*/

// Ejercicio día de la semana con la sentencia switch
let diaSemana = 1;

switch (diaSemana) {
    
    case 1: // Es como si hicieramos diaSemana === 1 (no existe una conversión de tipos de datos)
        console.log('Lunes');
        break;  // Agregamos break para romper la ejecución de la sentencia switch en caso de que diaSemana sea igual a 1
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log(`Dia de la semana inexistente ${diaSemana}`);   // Se ejecuta si los casos anteriores no coincidieron
}
