<template>
  <div class="navigation">
    <div class="lateralNavbar">
      <img class="avatarImage" src="../assets/pp.jpg" width="150vh">
      <br>
      <br>
      <ul class="buttonNavbar">
        <li><a href="default.asp">SOBRE MI</a></li>
        <li><a href="news.asp">EXPERIENCIA</a></li>
        <li><a href="contact.asp">EDUCACIÓN</a></li>
        <li><a href="contact.asp">HABILIDADES</a></li>
        <li><a href="contact.asp">INTERESES</a></li>
        <li><a href="contact.asp">PREMIOS</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
