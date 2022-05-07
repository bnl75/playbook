// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
        console.log(`The ajolonauta ${this.name} say's hello to ${yourPet}`)
        return 'Hola'
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
var saludo2 = myPet.sayHelloToMyPet("Kevin")

console.log(saludo2);

