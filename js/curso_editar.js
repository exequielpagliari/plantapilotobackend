console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            imagen: "",
            link: "",
            fechaInicio: "",
            fechaFinalizacion: "",
            estado: "",
            url: 'https://abadiaberna.pythonanywhere.com/cursos/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.imagen = data.imagen
                    this.fechaInicio = data.fechaInicio
                    this.fechaFinalizacion = data.fechaFinalizacion
                    this.estado = data.estado
                    this.link = data.link
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let curso = {
                nombre: this.nombre,
                precio: this.precio,
                link: this.link,
                imagen: this.imagen,
                fechaInicio: this.fechaFinalizacion,
                fechaFinalizacion: this.fechaFinalizacion,
                estado: this.estado

            }
            var options = {
                body: JSON.stringify(curso),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./cursos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app1')