<template>
  <div class="navigation">
    <div class="bloqueTitulo">
      <h1><b>{{contenidoJson.interests.textTitle}}</b></h1>
      <br>
      <br>
      <br>
      <h5>{{contenidoJson.interests.text}}</h5>
      <br>
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
  name: 'Interests',
  props: {
    contenidoJson: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
