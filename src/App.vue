<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <div> Lang of APP is {{lang}}</div>
      <router-link :to="{name: 'Home'}">Go home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

/*export var store = {
  state:{
    lang: 'ru',
  },
  changeLangAction(newLang){
    store.state.lang = newLang
  }
}*/
import {store} from "@/store";

export default {
  name: 'App',
  components: {

  },
  computed:{
    lang(){
      return store.lang
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
