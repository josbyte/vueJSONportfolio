<template>
  <div class="education">
    <div class="bloqueTitulo">
      <h1><b>{{contenidoJson.edu.eduText}}</b></h1>
      <div v-for="dato in contenidoJson.edu.studies" :key="dato">
        <h2 class="tituloExp">{{dato.nombre}}</h2>
        <h5 class="tituloExp2">{{dato.fecha}}</h5>
        <h3 class="tituloExp3">{{dato.nombreEstudio}}</h3>
        <br>
        <h5 class="tituloExp3">GPA: {{dato.notaMedia}}</h5>
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
  name: 'Education',
  props: {
    contenidoJson: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
