<template>
  <div class="intro">
    <div class="bloqueTitulo">
      <h1 style="font-size:5em;"><b>{{contenidoJson.intro.nombre}}</b></h1>
      &nbsp;<h1 style="color:brown;font-size:5em;"><b>{{contenidoJson.intro.apellido}}</b></h1><br>
      <h5>{{contenidoJson.intro.lugar}}, {{contenidoJson.intro.telefono}}</h5>&nbsp;
      <h5 style="color:brown">{{contenidoJson.intro.email}}</h5>
    </div>
    <div class="bloqueTexto">
    <br>
    <br>
    <p style="font-size:1.2em;">{{contenidoJson.intro.textIntro}}</p>
    <div class="socialBox" v-for="dato in contenidoJson.intro.redes" :key="dato">
      <a :href="dato.enlace">
        <img class="socialIcon" :src="dato.icono" height="75" width="75" >
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    contenidoJson: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
