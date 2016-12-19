<template>
  <div id="app">
    <streams></streams>
  </div>
</template>

<script>
import Streams from './components/Streams'

export default {
  name: 'app',
  components: {
    Streams
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
