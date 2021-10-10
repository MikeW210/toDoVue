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
      <button
        class="submit-button"
        minlength="3"
        type="submit"
        value="Add task"
      >
        <i class="far fa-check-circle"></i>
      </button>
    </form>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "AddTask",
  data() {
    return {
      taskText: "",
      done: false,
      time: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        text: this.taskText,
        done: false,
        time: dayjs().format("HH:mm"),
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
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  outline: none;
  border-bottom: solid rgb(187, 185, 185) 0.5px;
  height: 40px;
  font-size: 24px;
  width: 100%;
}
.submit-button {
  background-color: #4caf50;
  border: none;
  color: white;
  height: 40px;
  right: 20px;
  width: 40px;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 1em;
  box-shadow: 2px 2px 2px rgb(149, 147, 147);
}
.addTask {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0em 1em;
}

.formClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
