<template>
  <div class="home">
    <Navigation/>

      <Intro v-bind:contenidoJson="contenidoJson"/>
      <hr>
      <Experience v-bind:contenidoJson="contenidoJson"/>
      <hr>
      <Education v-bind:contenidoJson="contenidoJson"/>
      <hr>
      <Skill v-bind:contenidoJson="contenidoJson"/>
      <hr>
      <Interests v-bind:contenidoJson="contenidoJson"/>
      <hr>
      <Awards v-bind:contenidoJson="contenidoJson"/>
      <hr>
      <Projects v-bind:contenidoJson="contenidoJson"/>
      <hr>
      </div>
</template>

<script>
// @ is an alias to /src

import Projects from '@/components/Projects.vue'
import Awards from '@/components/Awards.vue'
import Interests from '@/components/Interests.vue'
import Skill from '@/components/Skill.vue'
import Education from '@/components/Education.vue'
import Navigation from '@/components/Navigation.vue'
import Experience from '@/components/Experience.vue'
import Intro from '@/components/Intro.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Navigation,
    Experience,
    Education,
    Skill,
    Interests,
    Awards,
    Projects,
    Intro
  },
  data () {
    return {
      contenidoJson: []
    }
  },
  methods: {
    cargaJson: function () {
      this.loading = true
      if (this.getCookie('idioma') === null || this.getCookie('idioma') === 'espanol') {
        axios.get('./portfolio.json').then((response) => {
          this.loading = false
          this.contenidoJson = response.data.espanol
          console.log(this.contenidoJson)
        }, (error) => {
          console.log('Error en peticion AJAX =>' + error)
        })
      }
      if (this.getCookie('idioma') === 'ingles') {
        axios.get('./portfolio.json').then((response) => {
          this.loading = false
          this.contenidoJson = response.data.ingles
          console.log(this.contenidoJson)
        }, (error) => {
          console.log('Error en peticion AJAX =>' + error)
        })
      }
    },
    getCookie: function (name) {
      var nameEQ = name + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
      return null
    },
    setCookie: function (name, value, days) {
      var expires = ''
      if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/'
    }
  },
  beforeMount () {
    this.cargaJson()
  }
}
</script>
