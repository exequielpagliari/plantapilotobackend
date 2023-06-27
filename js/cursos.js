const app = Vue.createApp({

    

    data() {
        return {
            /*cursos: [['LINKPOSCOSECHA','Finalizado','introposco.png','Intro a la poscosecha','Introducción a la poscosecha'],['LINKPOSCOSECHA','Finalizado','introposco.png','Intro a la poscosecha','Introducción a la poscosecha'],['LINKPOSCOSECHA','Finalizado','introposco.png','Intro a la poscosecha','Introducción a la poscosecha']],*/
            cursos: "",
            link: 'LINKPOSCOSECHA',
            estado: 'Finalizado',
            imagen: 'introposco.png',
            imagentexto: 'Intro a la poscosecha',
            curso: 'Introducción a la poscosecha',
        }
    },
    /*Cuando ubicamos el módulo de comunicación
    se debe crear en data() aquello que va a ser modificado.*/
    created() {

    fetch("https://abadiaberna.pythonanywhere.com/cursos")
        .then(res => res.json())
        .then(data => {
            this.cursos = data
            console.log(data)


        })

        .catch(err => console.log(err))

}

}).mount("#app")