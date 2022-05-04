class Pokemon {
    constructor(nombre) {
        //Asigno el valor pasado como parámetro en el constructor al atributo de la clase:
        this.nombre = nombre
    }


    //Función sayHello():
    sayHello() {
        console.log(`Mi pokemon ${this.nombre} te saluda!!!`);
    }


    //Función sayMessage():
    sayMessage(mensaje) {
        console.log(`Mi pokemon ${this.nombre} dice: ${mensaje}`);
    }
} //Pokemon

//Exportar la clase usando CommonJS:
// module.exports.Pokemon = Pokemon ¿Por qué así no funciona? - Se trata como un objeto
module.exports = Pokemon



/** Explicación de CommonJS:
    COMMONJS: THE DEFAULT NODEJS MODULE SYSTEM

    In NodeJS each .js file is handled as a separate CommonJS module. This means that variables,
    functions, classes, etc. are not accessible to other files by default. You need to explicitly
    tell the module system which parts of your code should be exported.

    This is done via the module.exports object or the exports shortcut, which are both available in
    every CommonJS module. Whenever you want to import code into a file, you use the require() function.
    Let’s see how this all works together.

    Link: https://reflectoring.io/nodejs-modules-imports/#commonjs-the-default-nodejs-module-system
*/