<template>
  <h1>Done Tasks</h1>
  <ul>
    <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <li v-if="doneTask.done">
        {{doneTask.task}}
      <!-- <SpecificTask/> -->
    </li>
    </template>
  </ul>
</template>

<script>
import axios from 'axios'
// import SpecificTask from './SpecificTask.vue'
export default {
    data() {
        return{
            doneTasks: [],
        }
    },
    // components:{
    //     SpecificTask
    // },
    async created(){
        try{
            const res = await axios.get('http://localhost:3000/Tasks')
            this.doneTasks = res.data
            console.log(this.doneTasks)
            
        }catch(e){
            alert(e)
        }
    }
}
</script>
