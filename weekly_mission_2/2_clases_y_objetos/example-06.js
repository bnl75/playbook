// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack){
        this.name                = name
        this.age                 = age
        this.stack               = stack
        this.exercises_completed = 75
        this.exercises_todo      = 99
    }
    
    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() { //Lo declaro con la palabra 'get'
        return this.exercises_completed
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted) //Aunque es un método, al ser un getter, accedo al valor como si fuera un atributo


/** Diferencia entre usar la palabra 'get' y definir un método en la clase:
    Cuando se usa la palabra 'get' para definir un método getter en JS, este
    se convertirá en lo que se conoce como 'accessors' (Object Accessors) o
    'propiedades computadas' (computed properties).

    Es decir, al momento de obtener el valor que queremos por medio del getter,
    se deberá hacer como si se estuviera accediendo a un ATRIBUTO más de la
    clase y no como si se accediera a un método normal de la clase.
*/