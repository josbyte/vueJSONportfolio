<template>
  <div class="experience">
    <div class="bloqueTitulo">
      <h1><b>{{contenidoJson.exp.expText}}</b></h1>
      <div v-for="dato in contenidoJson.exp.works" :key="dato">
        <h2 class="tituloExp">{{dato.nombre}}</h2>
        <h5 class="tituloExp2">{{dato.fecha}}</h5>
        <h3 class="tituloExp3">{{dato.empresa}}</h3>
        <br>
        <h5 class="tituloExp3">{{dato.texto}}</h5>
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
  name: 'Experience',
  props: {
    contenidoJson: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
