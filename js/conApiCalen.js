/* Contruccion del VUE*/



const app = Vue.createApp({
  data(){
      return{
        pais: "",
        localidad: "",
        provincia: "",
        fechaYHora: "",
        fecha:"",
        hora:"",
        dia: "",
        mes: "",
        anio:""

      }
  },
/*Cuando ubicamos el módulo de comunicación
se debe crear en data() aquello que va a ser modificado.*/
  created(){

      fetch("https://api.weatherapi.com/v1/forecast.json?key=c33e497f840b4b23914120535231605&q=auto:ip&days=1&aqi=yes&alerts=yes")
      .then(res => res.json())
      .then(data => {
          this.pais = data.location.country
          this.localidad = data.location.name
          this.provincia = data.location.region
          this.fechaYHora = data.location.localtime
          this.fecha= ` ${data.location.localtime.slice(0,11)}`,
          this.hora= ` ${data.location.localtime.slice(11,16)}`,
          this.dia=  `${data.location.localtime.slice(8,10)}`,
          this.mes= `${data.location.localtime.slice(5,7)}`,
          this.anio= `${data.location.localtime.slice(0,4)}`
      })

      .catch(err => console.log(err))

  }

}).mount("#app")