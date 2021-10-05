<template>
  <div>
    <h1>Add task!</h1>
    <form @submit="onSubmit">
      <input
        type="text"
        class="input"
        v-model="taskText"
        placeholder="Add taks to do"
      />
      <input type="submit" value="Add task" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      taskText: "",
      done: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.taskText) {
        alert("You didnt put any text");
        return;
      }
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        text: this.taskText,
        done: false,
      };
      console.log(newTask);
      this.$emit("add-task", newTask);
      this.taskText = "";
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  background-color: rgb(255, 255, 255);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  height: 40px;
  width: 50%;
  font-size: 20px;
}
input[type="submit"] {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px;
  cursor: pointer;
}
</style>
