<template>
  <div class="addTask">
    <h1 class="text">Add task!</h1>
    <form class="formClass" @submit.prevent="addTask">
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
import { mapMutations } from "vuex";
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
    ...mapMutations({ createTask: "addTask" }),
    addTask() {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        text: this.taskText,
        done: false,
        time: dayjs().format("HH:mm"),
      };
      this.createTask(newTask);
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
  border-bottom-style: hidden;
  outline: none;
  height: 40px;
  font-size: 24px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 5px 13px 30px -10px rgba(66, 68, 90, 1);
}
.submit-button {
  background-color: #4caf50;
  border: none;
  color: white;
  height: 50px;
  right: 20px;
  width: 50px;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
  font-size: 30px;
  border-radius: 50%;
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
.text {
  color: #8049fd;
  font-size: 31px;
}
</style>
