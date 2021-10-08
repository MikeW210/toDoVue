<template>
  <div class="addTask">
    <h1>Add task!</h1>
    <form class="formClass" @submit="onSubmit">
      <input
        type="text"
        class="input"
        v-model="taskText"
        minlength="3"
        placeholder="Add taks to do"
        required
        maxlength="70"
      />
      <input minlength="3" type="submit" value="Add task" />
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
  border: 2px solid #ccc;
  border-radius: 4px;
  height: 55px;
  width: 80%;
  font-size: 24px;
}
input[type="submit"] {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;

  cursor: pointer;
  font-size: 20px;
  border-radius: 10px;
}
.addTask {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%;
}

.formClass {
  display: flex;
  justify-content: space-between;
}
.h1 {
  justify-content: center;
}
</style>
