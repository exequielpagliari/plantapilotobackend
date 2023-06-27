const app1 = Vue.createApp({
    data() {
        return {
            cursos: [],
            //url:'http://localhost:5000/productos',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            url: 'https://abadiaberna.pythonanywhere.com/cursos', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            imagen: "",
            link: "",
            estado: "",
            fechaInicio: "",
            fechaFinalizacion: ""
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.cursos = data;
                    console.log(data)
                    
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(curso) {
            const url = this.url + '/' + curso;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let curso = {
                nombre: this.nombre,
                imagen: this.imagen,
                link: this.link,
                estado: this.estado,
                fechaInicio: this.fechaInicio,
                fechaFinalizacion: this.fechaFinalizacion
            }
            var options = {
                body: JSON.stringify(curso),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    console.log(options)
                    alert("Registro grabado")
                    window.location.href = "./cursos.html";
                })
                .catch(err => {
                    console.log(options)
                    console.error(err);
                    alert("Error al Grabarr")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app1')