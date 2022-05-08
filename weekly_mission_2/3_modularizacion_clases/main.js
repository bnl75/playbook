import Viajero from './viajero.js'

/*
    Este es un ejemplo de cómo modularizar clases y usarlas mediante módulos (diferentes archivos):
*/

const viajero1 = new Viajero("Diego Bernal", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija