<template>
  <div class="projects">
    <div class="bloqueTitulo">
      <h1>{{contenidoJson.proyectos.textoProyectos}}</h1>
      <br>
      <br>
      <br>
      <div class="divmodalprojects" v-for="dato in contenidoJson.proyectos.proyecto" :key="dato">
        <div class=" overlay-image _bp ">
        <img class=" image _bq " :src="dato.imgProyecto" alt="Alt text" height="150" width="150"/>
          <modal :name="dato.tituloProyecto" width="1000" height="700">
            <div class="cuerpoModal">
                <h2>{{dato.tituloProyecto}}</h2>
                <br>
                {{dato.prod}} <a :href="dato.linkProduccion">{{dato.linkProduccion}}</a>
                <br>
                {{dato.codText}} <a :href="dato.linkRepositorio">{{dato.linkRepositorio}}</a>
                <br>
                <div class="imgmodal" v-for="dato in dato.imagenes" :key="dato">
                    <img :src="dato" width="400" height="300">
                </div>
                <br>
                <p></p>
                <h5>{{dato.texto}}</h5>
                <br>
                {{dato.tecnologyText}}: {{dato.tecnologias}}
                <br>
                <button @click="closeModal (dato.tituloProyecto)">Cerrar</button>
            </div>
          </modal>
          <div class=" normal _bs ">
            <div class=" text _q " >
            </div>
          </div>
          <div class=" hover _br "   @click="showModal (dato.tituloProyecto)">
            <div class=" text _q " >{{dato.tituloProyecto}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="bloqueTexto">
      <p></p>
    </div>
</div>
</template>

<script>

export default {
  name: 'Projects',
  components: {
  },
  props: {
    contenidoJson: Array
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal (nombre) {
      this.$modal.show(nombre)
    },
    closeModal (nombre) {
      this.$modal.hide(nombre)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
