// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: " + age)


/** Método .find():
    Devuelve el VALOR del primer elemento del array que cumpla la condición
    de la función proporcionada.
    Si no se encuentra el valor, entonces devuelve 'undefined'.

    Nota: Si necesitas el ÍNDICE del elemento encontrado en el array, utiliza findIndex().
*/