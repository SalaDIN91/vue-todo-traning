<template>
  <div>
    <div>{{id}}</div>
    <div>{{title}}</div>
    <div>{{status}}</div>
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
    status:{
      type: Number,
      required: true,
    },
    detail:{
      type: String,
    }
  }
}
</script>

<style scoped>

</style>