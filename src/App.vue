<template>
  <div class="container">
    <div class="header">
      <div class="days">
        <p class="day">{{ currentDay }}</p>
        <p class="month-day">&nbsp;{{ currentMonthDay }}th</p>
        <div class="ammount">
          <p class="ammountOfTasks">{{ numberOfTasks }}&nbsp;</p>
          <p class="ammountOfTasksText">tasks</p>
        </div>
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
    <transition name="fade">
      <AddTask v-if="showAddTask" />
    </transition>
    <div class="tasks">
      <div v-for="task in allTasks" :key="task.id"></div>
      <Tasks />
    </div>
  </div>
</template>

<script>
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import { mapGetters } from "vuex";
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
      tasks: [],
      showAddTask: false,
      currentDay: dayjs().format("dddd, "),
      currentMonthDay: dayjs().format("D"),
      currentTime: dayjs().format("MMMM"),
    };
  },
  computed: {
    ...mapGetters({
      allTasks: "allTasks",
      numberOfTasks: "numberOfTasks",
    }),
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: linear-gradient(25deg, #ff7e7c 50%, #733ceb 50%);
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
  font-family: "Roboto", sans-serif;
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
  padding: 0.2em 1em;
  position: relative;
  border-bottom: solid rgb(187, 185, 185) 0.5px;
}
.button-placement {
  display: flex;
  right: 20px;
  transform: translateY(-50%);
  position: absolute;
}
.ammount {
  display: flex;
  margin-left: auto;
  align-items: flex-end;
  padding-top: 20px;
}
.ammountOfTasks {
  color: #a7a4b6;
  font-size: 16px;
  margin-left: auto;
  margin-bottom: 0;
  padding: 0;
  font-weight: bold;
}
.ammountOfTasksText {
  color: #a7a4b6;
  font-size: 16px;
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
  margin-top: 5px;
  font-size: 17px;
  color: #a7a4b6;
}
.day {
  color: #8049fd;
  font-weight: bold;
  margin-bottom: 0;
  padding: 0;
  font-size: 31px;
}
.month-day {
  color: #8049fd;
  margin-bottom: 0;
  padding: 0;
  font-weight: 500;
  font-size: 31px;
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
.tasks {
  padding-top: 1em;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.25s ease;
}
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>
