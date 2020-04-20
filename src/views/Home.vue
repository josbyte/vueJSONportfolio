<template>
  <div class="home">
    <Navigation/>
      <Intro/>
      <hr>
      <Intro/>
      <hr>
      <Intro/>
      <hr>
      <Intro/>
      <hr>
      <Intro/>
      <hr>
      <Intro/>
  </div>
</template>

<script>
// @ is an alias to /src

import Navigation from '@/components/Navigation.vue'
import Intro from '@/components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Intro
  },
  mounted () {
    alert('aaa')
  }
}
</script>
