<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <router-link to="home">Go home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
