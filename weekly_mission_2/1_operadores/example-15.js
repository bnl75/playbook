//Ejemplo 15: Uso de sort para ordenar elementos
// const products = [10, 20, 1, 100000]
// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot', 10, 20, 1, 100000]
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
const resultado = products.sort()
console.log(products)
console.log(resultado)


/** Método .sort():
    Ordena los elementos de una matriz localmente y devuelve el arreglo ordenado.
    No devuelve otra matriz, solo trabaja sobre la matríz que está invocando al
    método y la ordena de forma interna.

    Forma de ordenar:
        Los elementos son ordenados convirtiéndolos a strings y comparando la posición
        del valor Unicode de dichos strings. Por ejemplo, "Cherry" viene antes que "banana" 
        (porque las mayúsculas van antes que las minúsculas en la codificación Unicode).
        En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son
        convertidos a strings y ordenados según el valor Unicode, el resultado será "80"
        antes que "9".
*/