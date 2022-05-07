// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)


/** Método .filter():
    El método filter() crea un nuevo array con todos los elementos que cumplan la
    condición implementada por la función dada.
    Un nuevo array con los elementos que cumplen la condición. Si ningún elemento
    cumple la condición, se devolverá un array vacío.

    Método .includes():
    Determina si una matriz incluye un determinado elemento (si existe o no un
    elemento en una matriz), devuelve true o false
    según corresponda.

    Método .endsWith():
    Determina si una cadena de texto termina con los caracteres de una cadena indicada,
    devolviendo true o false según corresponda.
*/