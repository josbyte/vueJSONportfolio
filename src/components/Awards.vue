<template>
  <div class="navigation">
    <div class="bloqueTitulo">
      <h1>{{contenidoJson.awards.awardTexto}}</h1>
      <br>
      <br>
      <br>
      <div v-for="dato in contenidoJson.awards.award" :key="dato">
        <img class="workflowcheck" src="../assets/trofeo.png" height="25" width="25">
        <h5 class="workflowcheck">{{dato}}</h5>
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
  name: 'Awards',
  props: {
    contenidoJson: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
