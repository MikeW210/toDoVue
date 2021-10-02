<template>
  <done-tasks />
  <undone-tasks />
</template>

<script>
import DoneTasks from "./DoneTasks.vue"
import UndoneTasks from "./UndoneTasks.vue"
export default {
   name: "Tasks",
   props: {
       tasks: Array

   },
    
    components: {
        DoneTasks,UndoneTasks
    }
   
}
</script>