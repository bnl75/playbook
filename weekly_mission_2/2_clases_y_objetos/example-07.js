// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name     = name
        this.mission  = mission
        this.students = 0
        this.lives    = 0
    }
    
    get getStudents() {
        return this.students
    }
    
    get getLives() {
        return this.lives
    }
    
    set setStudents(students) {
        this.students = students
    }
    
    set setLives(lives) {
        this.lives = lives
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Diego Bernal", "NodeJS")

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100 //Aunque es un método, al ser un setter, asigno el valor como si fuera un atributo
missionCommanderNode.setLives = 3 //Aunque es un método, al ser un setter, asigno el valor como si fuera un atributo

console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)


/** Diferencia entre usar la palabra 'set' y definir un método en la clase:
    Cuando se usa la palabra 'set' para definir un método setter en JS, este
    se convertirá en lo que se conoce como 'accessors' (Object Accessors) o
    'propiedades computadas' (computed properties).

    Es decir, al momento de asignar el valor que queremos por medio del setter,
    se deberá hacer como si se estuviera asignando a un ATRIBUTO más de la
    clase y no como si se accediera a un método normal de la clase.
*/