const app1 = Vue.createApp({

    

    data() {
        return {
            
            cursos: [],

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

}).mount("#app1")