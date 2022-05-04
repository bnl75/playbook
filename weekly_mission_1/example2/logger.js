// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
}

  // Esta es una función que se guardara en este módulo como verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}



/** Palabra 'exports':
    Sirve para PERMITIRLE a una función SER EXPORTADA a partir de un
    archivo externo (módulo) hacía un archivo de entrada  o el archivo
    "padre" de JS que va a importar todos los módulos que usará por medio
    de la palabra 'require'.
*/