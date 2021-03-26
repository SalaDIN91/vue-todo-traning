<template>
  <div>
    Experiment component
    <div>Lang in experiment component {{lang}}</div>
    <button @click="setLang('kz');">KZ</button>
  </div>
</template>

<script>
import {mutations, store} from "@/store";

export default {
  name: "experiment",
  computed:{
    lang(){
      return store.lang
    }
  },
  methods:{
    setLang: mutations.setLang
  }
}
</script>

<style scoped>

</style>