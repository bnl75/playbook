export default class MyPokemon {
    constructor (nombre) {
        //Asigno el valor pasado como parámetro en el constructor al atributo de la clase:
        this.nombre = nombre
    }


    //Función sayHello():
    sayHello() {
        console.log(`Mi pokemon ${this.nombre} te saluda!!!`);
    }
} //MyPokemon

//Exportar la clase usando ESM (EcmaScript Modules):
// Solo se pone la palabra reservada 'export' al inicio de la declaración de la clase,
// esto le dice al compilador de JS qué partes del archivo (módulo) pueden ser accesibles
// desde otro archivo (o sea cuales cosas se van a exportar).

//Aquí al usar 'export default' JS ya toma de forma automática la clase, sin tener que
//especificar en un objeto el nombre de lo que estamos exportando, como lo sería con el
// 'export' a secas (sin el 'default').



/** Explicación de ESM (EcmaScript Modules):
    ES MODULES: THE ECMASCRIPT STANDARD

    So, why would we need another option for imports?

    As we already learned, CommonJS was initially chosen to be the default module system
    for NodeJS. At this time there was no such thing as a built-in module system in JavaScript.
    Thanks to the enormous growth of the world-wide JavaScript usage, the language evolved a lot.

    Since the 2015 edition of the underlying ECMAScript standard (ES2015) we actually have a
    standardized module system in the language itself, which is simply called ES Modules.

    It took a while before the browser vendors and the NodeJS maintainers actually fully implemented
    the standard. This was finally the case for NodeJS with version 14, when it first got stable.

    Link: https://reflectoring.io/nodejs-modules-imports/#commonjs-the-default-nodejs-module-system
*/