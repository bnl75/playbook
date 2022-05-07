// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeFalse = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeFalse) //true


/** Método .some():
    Comprueba si al menos un elemento del array cumple con la condición implementada
    por la función proporcionada.
    Iterará la matriz hasta que encuentre un valor donde la condición sea verdadero (true).
    Si se encuentra dicho elemento, retorna true inmediatamente. Si no, retorna false.

    Nota: Este método devuelve false para cualquier condición puesta en un array vacío.

*/