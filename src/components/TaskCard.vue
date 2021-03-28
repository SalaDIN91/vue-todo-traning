<template>
  <div>
    <div>{{id}}</div>
    <div>{{title}} AND LANG IS {{lang}}</div>
    <div>{{done}}</div>
    <div>{{detail}}</div>
  </div>
</template>

<script>

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
}
</script>

<style scoped>

</style>