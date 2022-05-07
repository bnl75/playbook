// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){ return num * num})

// También puedes escribir la función como fat arrow:
// const numbersSquare = numbers4.map((num) => { return num * num})
// const numbersSquare = numbers4.map((num) => num * num)

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)


/** .forEach() VS .map():
    FOREACH:
        Sirve para iterar una matriz teniendo la posibilidad de cambiar el valor
        de la misma, es decir, se modifica el origen. Es útil para cuando se
        necesita recorrer la matriz sin alterar su valor ni devolver algo.
        Este método es mutable y no devuelve valor alguno.

    MAP:
        Sirve para recorrer una matriz sin tener la posibilidad de cambiar el valor
        de la misma, pero este método me va a devolver una nueva matriz con los
        valores de las operaciones que haya hecho en cada una de las iteraciones.
        Permite ejecutar una función por cada elemento de una matriz.
        ES NECESARIO PASARLE UNA FUNCIÓN COMO PARÁMETRO.
        Este método es inmutable y devuelve una nueva matriz.
*/