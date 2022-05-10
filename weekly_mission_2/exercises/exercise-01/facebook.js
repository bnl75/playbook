//Modelado del diagrama USER:
const user = {
    nombre: "Diego Bernal",
    estudios: "Licenciado en Informática, FCA, UNAM",
    trabajo: "Desarrollador web fullstack",
    edad: 23,
    ubicacion: 'CDMX, México',
    numeroFotos: 73,
    numeroPosts: 255,
    fechaRegistro: '01-08-2012',
    paginasSeguidas: ['Microsoft', 'Inovacción Virtual', 'Universidad Nacional Autónoma de México'],
    getDescripcionGeneral: function() {
        return `Perfil : ${this.nombre}, Edad: ${this.edad}, Ubicación: ${this.ubicacion}`
    },
    getTotalPublicaciones: function() {
        return this.numeroFotos + this.numeroPosts
    }
}

console.log('******* USER *******');
console.log("Estudios: " + user.estudios)
console.log("Trabajo: " + user.trabajo)
console.log(user.getDescripcionGeneral())
console.log("Total de publicaciones: " + user.getTotalPublicaciones())
console.log('\r\r')





//Modelado del diagrama POST:
const post = {
    descripcion: "¡Estoy en mi última semanda de Launch X en Inovacción Virtual!",
    autor: "Diego Bernal",
    reacciones: {
        "Me gusta": 183,
        "Me encanta": 68,
        "Me importa": 49,
        "Me divierte": 0,
        "Me entristece": 10,
        "Me enoja": 0,
    },
    visibilidad: "Privada",
    numeroComentarios: 13,
    hashtag: ['LaunchX', 'InovaccionVirtual', 'Microsoft'],
    fechaPublicacion: '2022-03-14',
    getDescripcionYAutor: function() {
        return `Descripción: ${this.descripcion}, Autor: ${this.author}`
    },
    getGeneralInfo: function() {
        return `La publicación "${this.descripcion}" tiene visibilidad: ${this.visibilidad}.\rEtiquetas mencionadas: ${this.hashtag}`
    },
    getTotalInteracciones: function() {
        let totalInteracciones = 0;
        for (const reaccion in post.reacciones) {
            totalInteracciones += post.reacciones[reaccion];
        }
        return totalInteracciones;
    }
}

console.log('******* POST *******');
console.log("Publicación: " + post.descripcion)
console.log("Número de interacciones: " + post.getTotalInteracciones())
console.log(post.getDescripcionYAutor())
console.log(post.getGeneralInfo())
console.log('\r\r')





//Modelado del diagrama BIOGRAPHY:
const biography = {
    estudios: "Licenciado en Informática, FCA, UNAM",
    trabajo: "Desarrollador web fullstack",
    edad: 23,
    ubicacion: 'CDMX, México',
    getOcupaciones: function() {
        return `Estudios: ${this.estudios}, Trabajo: ${this.trabajo}`
    },
    getUbicacion: function() {
        return `La ubicación de la persona ${user.nombre} es ${this.ubicacion}`
    }
}

console.log('******* BIOGRAPHY *******');
console.log("Edad: " + biography.edad)
console.log(biography.getOcupaciones())
console.log(biography.getUbicacion())
console.log('\r\r')