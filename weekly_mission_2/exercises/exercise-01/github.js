//Modelado del diagrama REPO:
const repo = {
    name: "playbook",
    author: "@bnl75",
    language: "JavaScript",
    numberOfCommits: 28,
    stars: 7,
    forks: 1,
    issues_open: 14,
    issues_close: 11,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log('******* REPO *******');
console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log('\r\r')





//Modelado del diagrama ISSUE:
const issue = {
    title: "Duda para realizar pruebas unitarias",
    repositoryNameAssociated: repo.name,
    status: "Open",
    numberOfComments: 5,
    labels: ['JavaScript', 'Testing', 'Dudas'],
    author: "@bnl75",
    dateCreated: new Date().getDate(),
    lastUpdated: "2022-04-30",
    getTitleAndAuthor: function() {
        return `Issue: ${this.title}, Autor: ${this.author}`
    },
    getGeneralInfo: function() {
        return `El Issue "${this.title}" creado por ${this.author} se encuentra en estatus: ${this.status}.\rEtiquetas: ${this.labels}`
    }
}

console.log('******* ISSUE *******');
console.log("Nombre del Issue: " + issue.title)
console.log("Número de comentarios: " + issue.numberOfComments)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log('\r\r')





//Modelado del diagrama PULL_REQUEST:
const pull_request = {
    title: 'Solución para errores en concatenaciones',
    branchName: 'main',
    dateCreated: new Date().getDate(),
    status: 'ACCEPTED',
    repositoryNameAssociated: repo.name,
    getStatus: function() {
        return `Estatus: ${this.status}`
    },
    getTitleAndAuthor: function() {
        return `Título: ${this.title}, Autor: ${repo.author}`
    }
}

console.log('******* PULL_REQUEST *******');
console.log("Nombre del pull_request: " + pull_request.title)
console.log("Rama: " + pull_request.branchName)
console.log(pull_request.getStatus())
console.log(pull_request.getTitleAndAuthor())
console.log('\r\r')

console.log(pull_request);
