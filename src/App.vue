<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 1rem;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
</style>
