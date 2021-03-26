<template>
  <div>
    This is Home Page
    <div>
      <div>And this is TODO LIST</div>
      <task-card v-for="task in tasks" :id=task.id :title=task.title :done=task.done :detail=task.detail :key="task.id"></task-card>
      <experiment></experiment>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";
import Experiment from "@/components/experiment";
export default {
  name: "Home",
  components: {Experiment, TaskCard},
  data: function (){
    return {
      tasks:[
        {
          id:1,
          title:'This is number one',
          done:false,
          detail:' descriptin'
        },
        {
          id:2,
          title:'This is number two',
          done:false,
          detail:' '
        },
        {
          id:3,
          title:'This is number third',
          done:true,
          detail:''
        },
        {
          id:12,
          title:'Lorem',
          done:true,
          detail:''
        },
        {
          id:13,
          title:'Ipsum',
          done:false,
          detail:'Some cool description'
        },
        {
          id:24,
          title:'This is number two OR NOT',
          done:false,
          detail:''
        },
        {
          id:25,
          title:'This is number 25',
          done:true,
          detail:' 25 25 25'
        },
        {
          id:33,
          title:'This is number two',
          done:false,
          detail:' '
        },
      ]
    }
  }
}

</script>

<style scoped>

</style>