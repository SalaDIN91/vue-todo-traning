<template>
  <div id="app">
    <div>
      <div> Lang of APP is {{ language }}</div>
      <div> Count {{ count }}</div>
      <button @click="setLanguage('kz')">Change Language</button>
      <button @click="incrementCount">Increment</button>
      <button @click="decrementCount">Decrement</button>
      <router-link :to="{name: 'Home'}">Go home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    language(){
      return this.$store.state.language
    },
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    setLanguage(language){
      this.$store.commit('setLanguage',language)
    },
    incrementCount(){
      this.$store.commit('incrementCount')
    },
    decrementCount(){
      this.$store.commit('decrementCount')
    }
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
