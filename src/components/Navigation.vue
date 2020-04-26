<template>
  <div class="navigation">
    <div class="lateralNavbar">
      <img class="avatarImage" src="../assets/pp.jpg" width="150vh">
      <br>
      <br>
      <ul class="buttonNavbar">
        <li><a href="#" v-scroll-to="'.home'">{{contenidoJson.menu[0].sobreMi}}</a></li>
        <li><a href="#" v-scroll-to="'.experience'">{{contenidoJson.menu[1].experiencia}}</a></li>
        <li><a href="#" v-scroll-to="'.education'">{{contenidoJson.menu[2].educacion}}</a></li>
        <li><a href="#" v-scroll-to="'.skill'">{{contenidoJson.menu[3].skills}}</a></li>
        <li><a href="#" v-scroll-to="'.interests'">{{contenidoJson.menu[4].intereses}}</a></li>
        <li><a href="#" v-scroll-to="'.awards'">{{contenidoJson.menu[5].premios}}</a></li>
        <li><a href="#" v-scroll-to="'.projects'">{{contenidoJson.menu[6].proyectos}}</a></li>
      </ul>
      <br>
      <br>
      <ul class="buttonNavbar">
        <li ><a href="#" @click="setCookie ('idioma', 'espanol')">Español</a></li>
        <li><a href="#" @click="setCookie ('idioma', 'ingles')">English</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    contenidoJson: Array
  },
  data () {
    return {}
  },
  methods: {
    setCookie: function (name, value, days) {
      var expires = ''
      if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/'
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
