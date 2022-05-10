//Modelado del diagrama PROFILE:
const profile = {
    nombre: "Diego Bernal",
    correo: "diego@launchx.com.mx",
    edad: 23,
    ubicacionPredeterminada: 'CDMX, México',
    usuarioDesde: '13-07-2017',
    numeroViajes: 25,
    metodosPago: [
        {
            tipo: "Tarjeta de débito",
            banco: "HSBC",
            convenio: "Visa",
            mesExpiracion: '04',
            anioExpiracion: '2025',
            ultimos4Digitos: '1348',
            titular: 'Diego Arturo Bernal'
        },
        {
            tipo: "Tarjeta de crédito",
            banco: "BBVA",
            convenio: "Mastercard",
            mesExpiracion: '07',
            anioExpiracion: '2028',
            ultimos4Digitos: '9032',
            titular: 'Diego Bernal Sánchez'
        }
    ],
    getInformacionUsuario: function() {
        return `Usuario: ${this.nombre}, Correo electrónico: ${this.correo}, Edad: ${this.edad}`
    },
    getMetodosDePago: function() {
        console.log('*** Métodos de pago ***');
        this.metodosPago.forEach(metodo => {
            console.log("Tipo: " + metodo.tipo);
            console.log("Banco: " + metodo.banco);
            console.log("Convenio: " + metodo.convenio);
            console.log("Mes de expiración: " + metodo.mesExpiracion);
            console.log("Año de expiración: " + metodo.anioExpiracion);
            console.log("Últimos 4 dígitos: " + metodo.ultimos4Digitos);
            console.log("Titular: " + metodo.titular);
            console.log('\r')
        });
    }
}

console.log('******* PROFILE *******');
console.log("Número de viajes: " + profile.numeroViajes)
console.log("Ubicación predeterminada: " + profile.ubicacionPredeterminada)
console.log(profile.getInformacionUsuario())
console.log(profile.getMetodosDePago())
console.log('\r\r')





//Modelado del diagrama TRAVEL:
const travel = {
    inicio: 'Migue Ángel de Quevedo 1340, Coyoacán, CDMX',
    destino: 'Facultad de Contaduría y Administración, Ciudad Universitaria, Tlalpan, CDMX',
    minutosTranscurridos: '18',
    kmRecorridos: '6',
    precio: 79.48,
    usuario: profile.correo,
    tarifa: 'normal',
    fechaViaje: '2022-02-17',
    getDescripcionViaje: function() {
        return `Usuario: ${this.usuario}, Origen: ${this.inicio}, Destino: ${this.destino}, Precio: $${this.precio} MXN`
    },
    getDatosViaje: function() {
        return `Se recorrieron ${this.kmRecorridos}km en ${this.minutosTranscurridos} minutos con tarifa ${this.tarifa}`
    }
}

console.log('******* TRAVEL *******');
console.log("Fecha de viaje: " + travel.fechaViaje)
console.log(travel.getDescripcionViaje())
console.log(travel.getDatosViaje())
console.log('\r\r')