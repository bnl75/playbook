// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
// const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
const valorInicial = 0
const result_of_reduce = numbers9.reduce((acumulador, valorActual) => acumulador - valorActual, valorInicial)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)


/** Método .reduce():
    Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado
    un único valor.
    El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda
    en cada iteración de la matriz y, en última instancia, se convierte en el valor final,
    único y resultante.
*/