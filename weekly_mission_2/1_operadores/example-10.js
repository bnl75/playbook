// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)


/** Método .every():
    Determina si todos los elementos en el array cumplen con una condición.
    Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!
    Devuelve true solo si la condición se cumple para cada elemento de la matriz;
    de lo contrario, devuelve false.
*/