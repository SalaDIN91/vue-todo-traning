<template>
  <div>
    <div>{{id}}</div>
    <div>{{title}} AND LANG IS {{lang}}</div>
    <div>{{done}}</div>
    <div>{{detail}}</div>
    <button @click="setLang('ru');">RU</button>
  </div>
</template>

<script>
import {mutations, store} from "@/store";

export default {
  name: "TaskCard",
  props:{
    id:{
      type: Number,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
    done:{
      type: Boolean,
      required: true,
    },
    detail:{
      type: String,
    }
  },
  computed:{
    lang(){
      return store.lang
    },
  },
  methods:{
    setLang: mutations.setLang
  }
}
</script>

<style scoped>

</style>