<template>
  <div class="container">
    <div class="header">
      <div class="days">
        <p class="day">{{ currentDay }}</p>
        <p class="month-day">{{ currentMonthDay }}</p>
        <p class="ammountOfTasks">{{ tasks.length }} tasks</p>
      </div>

      <div class="date">
        <p class="month">{{ currentTime }}</p>
      </div>
    </div>

    <div class="btn-anchor">
      <div class="button-placement">
        <Button
          @toggle-add-task="toggleAddTask"
          :color="showAddTask ? '#FF5B6A' : '#FF616D'"
          :showAddTask="showAddTask"
        />
      </div>
    </div>

    <AddTask v-if="showAddTask" @add-task="addTask" />
    <div class="tasks">
      <Tasks
        @delete-task="deleteTask"
        @change-status="changeStatus"
        :tasks="tasks"
      />
    </div>
  </div>
</template>

<script>
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import dayjs from "dayjs";

export default {
  name: "App",
  components: {
    AddTask,
    Tasks,
    Button,
  },
  data() {
    return {
      showAddTask: false,
      currentDay: dayjs().format("dddd, "),
      currentMonthDay: dayjs().format("D"),
      currentTime: dayjs().format("MMMM"),
      tasks: [
        {
          id: 1,
          text: "umyj dupe",
          done: false,
          time: "10:30",
        },
        {
          id: 2,
          text: "Brawo umyłeś dupę!",
          done: true,
          time: "12:22",
        },

        {
          id: 3,
          text: "Weź no się za nogi bocianie",
          done: false,
          time: "19:39",
        },
      ],
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      console.log(task);
      this.tasks.push(task);
      console.log(this.tasks, "dodaes task");
    },

    deleteTask(id) {
      console.log(id + "dupa");
      this.tasks = this.tasks.filter((task) => task.id !== id);
      console.log(this.tasks);
      console.log("wyjebales task");
    },
    changeStatus(id) {
      console.log("chcesz zmienic task" + id);
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
      console.log(this.tasks);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: linear-gradient(35deg, #ff7e7c 50%, #733ceb 50%);
}
html {
  font-size: 16px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
}
</style>

<style scoped>
.container {
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
  background: white;
  flex-direction: column;
  border: 1px solid steelblue;
  border-radius: 5px;
  position: relative;
}
.header {
  display: flex;
  flex-direction: column;
  font-size: 35px;
  padding: 0em 1em;
  position: relative;
  border-bottom: solid rgb(187, 185, 185) 0.5px;
}
.button-placement {
  display: flex;
  right: 20px;
  transform: translateY(-50%);
  position: absolute;
}
.ammountOfTasks {
  color: #a7a4b6;
  font-size: 20px;
  display: inline-block;
  margin-left: auto;
  margin-bottom: 0;
  padding: 0;
}
.btn-anchor {
  width: 100%;
  height: 0;
}
.month {
  padding: 0;
  margin-top: 0;
  font-size: 25px;
  color: #a7a4b6;
}
.day {
  color: #8049fd;
  font-weight: bold;
  margin-bottom: 0;
  padding: 0;
}
.month-day {
  color: #8049fd;
  margin-bottom: 0;
  padding: 0;
}
.days {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.date {
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin-top: auto;
}
</style>
