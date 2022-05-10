//Modelado del diagrama USER:
const user = {
    nombre: "Diego Bernal",
    username: "@diegobernal5",
    descripcion: "Desarrollador web fullstack. Apasionado por el uso de la tecnología para resolver problemas.",
    edad: 23,
    localidad: 'CDMX, México',
    visibilidad: 'Privado',
    fechaRegistro: '21-04-2011',
    numeroPublicaciones: 375,
    getVisibilidadyFechaRegistro: function() {
        return `Perfil con visibilidad: ${this.username}, creado en: ${this.fechaRegistro}`
    },
    getGeneralInfo: function() {
        return `El usuario ${this.username} pertenece a ${this.nombre}`
    }
}

console.log('******* USER *******');
console.log("Edad: " + user.edad)
console.log("Localidad: " + user.localidad)
console.log(user.getVisibilidadyFechaRegistro())
console.log(user.getGeneralInfo())
console.log('\r\r')





//Modelado del diagrama TRENDING_TOPIC:
const trending_topic = {
    titulo: 'LaunchXMicrosoft',
    menciones: 750237,
    fechaCreacion: '27-04-2022',
    categoria: 'Tecnología',
    getDescripcion: function() {
        return `Título: ${this.titulo}, Categoría: ${this.categoria}`
    },
    getNumeroMenciones: function() {
        return `Menciones recibidas: ${this.menciones}`
    }
}

console.log('******* TRENDING_TOPIC *******');
console.log("Nombre del trending topic: " + trending_topic.titulo)
console.log("Fecha de creación: " + trending_topic.fechaCreacion)
console.log(trending_topic.getDescripcion())
console.log(trending_topic.getNumeroMenciones())
console.log('\r\r')





//Modelado del diagrama HASHTAG:
const hashtag = {
    titulo: 'JavaScript',
    apariciones: 1978637,
    fechaUltimaAparicion: '30-04-2022',
    temasRelacionados: ['Programación', 'Tecnología', 'Desarrollo'],
    getInfoGeneral: function() {
        return `El hashtag: ${this.titulo} ha tenido ${this.apariciones} apariciones`
    },
    getNumeroMenciones: function() {
        return `Temas relacionados: ${this.temasRelacionados}`
    }
}

console.log('******* HASHTAG *******');
console.log("Nombre del trending topic: " + hashtag.titulo)
console.log("Fecha de última aparición: " + hashtag.fechaUltimaAparicion)
console.log(hashtag.getInfoGeneral())
console.log(hashtag.getNumeroMenciones())
console.log('\r\r')
