<template>
  <div class="skill">
    <div class="bloqueTitulo">
      <h1><b>{{contenidoJson.skill.skillText}}</b></h1>
      <br>
      <br>
      <br>
      <h2>{{contenidoJson.skill.skillTextProgramming}}</h2>
      <br>
      <div class="programmingBox" v-for="dato in contenidoJson.skill.category.programming" :key="dato">
        <img class="socialIcon" :src="dato" height="75" width="75" >
      </div>
      <br>
      <br>
      <br>
      <h2>Workflow</h2>
      <div v-for="dato in contenidoJson.skill.category.workflow" :key="dato">
        <img class="workflowcheck" src="../assets/checkmark.png" height="25" width="25">
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
  name: 'Skill',
  props: {
    contenidoJson: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
