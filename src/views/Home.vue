<template>
  <div>
    This is Home Page
    <task-card id="1" title="New task" status="2" detail="Many details"></task-card>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";
export default {
  name: "Home",
  components: {TaskCard},
}

</script>

<style scoped>

</style>