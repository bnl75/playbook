const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]



// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('Nombre de los explorers:');
explorers.forEach(explorer => {
    console.log(explorer.name);
});

console.log("\r");

// 2. Imprime el stack de cada explorer, usa FOR EACH
console.log('Stack de los explorers:');
explorers.forEach(explorer => {
    console.log(explorer.name + ": " + explorer.stack);
});

console.log("\r");

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const listaStacks = explorers.map(function(explorer) {
    return explorer.stack;
});
console.log("Lista de stacks: " + listaStacks);

console.log("\r");

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const listaExplorersJs = explorers.filter(function (explorer) {
    if (explorer.stack.includes('js')) return explorer;
})
for (const explorer of listaExplorersJs) {
    console.log("Explorer que domina JS: " + explorer.name);
}

console.log("\r");

// 5. Busca el primer explorer que sea de la CDMX, usa FIND
const explorer = explorers.find((explorer) => explorer.city == "CDMX")
console.log("Primer explorer que es de la CDMX: " + explorer.name)

console.log("\r");

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
const totalEjerciciosCompletados = 0;
const resultadoReduce = explorers.reduce((acumulador, valorActual) => acumulador + valorActual, totalEjerciciosCompletados);
console.log("Suma de todos los ejercicios completados: " + resultadoReduce)

console.log("\r");

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const ejercicioTerminado = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log("Al menos uno de los explorers ha terminado el ejercicio de la Mission Frontend: " + ejercicioTerminado)

console.log("\r");

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const isAllFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
console.log("Todos los explorers han terminado el onboarding: " + isAllFinished)


