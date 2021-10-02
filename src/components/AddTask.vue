<template>
  <div>
    <h1>Add task!</h1>
    <form @submit="onSubmit">
    <input type="text" v-model="taskText" />
    <input type="submit" value="Add task" />
    </form>

  </div>
</template>

<script>import axios from "axios";

export default {
  name: "AddTask",
  data() {
    return {
      taskText: "",
      done: false
    };
  },
  methods:{
        onSubmit(e){
          e.preventDefault()
          if(!this.taskText){
              console.log('You didnt put any text!')
              return
          }
            axios.post('http://localhost:3000/Tasks', { task: this.taskText, done:this.done }).then(response => this.id = response.data.id)
            this.taskText = ""
            axios.get('http://localhost:3000/Tasks')
      }
  }
};
</script>

<style></style>
