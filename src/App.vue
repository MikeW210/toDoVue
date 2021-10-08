<template>
  <div class="container">
    <div class="header">
      <p>{{ currentDate }}</p>
      <p class="ammountOfTasks">Tasks {{ tasks.length }}</p>
    </div>
    <div class="buttonPlacement">
      <Button
        @toggle-add-task="toggleAddTask"
        :color="showAddTask ? 'red' : 'green'"
        :text="showAddTask ? 'x' : '+'"
      />
    </div>
    <AddTask v-if="showAddTask" @add-task="addTask" />
    <Tasks
      @delete-task="deleteTask"
      @change-status="changeStatus"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";

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
      currentDate: "",
      tasks: [
        {
          id: 1,
          text: "umyj dupe",
          done: false,
        },
        {
          id: 2,
          text: "Brawo umyłeś dupę!",
          done: true,
        },

        {
          id: 3,
          text: "Weź no się za nogi bocianie",
          done: false,
        },
      ],
    };
  },
  created() {
    setInterval(this.currentDateTime, 1000);
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
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;
      this.currentDate = dateTime;
    },
  },
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
body {
  background-color: black;
}
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: flex;
  margin: 2%;
  background: white;
  max-width: 50%;
  flex-direction: column;
  border: 1px solid steelblue;
  border-radius: 5px;
}
.button {
  align-content: flex-end;
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 20px;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  font-size: 25px;
  font-family: inherit;
}
.header {
  display: flex;
  font-size: 35px;
  justify-content: space-between;
  padding: 2% 2% 0% 2%;
}
.buttonPlacement {
  display: flex;
  justify-content: flex-end;
  padding: 0% 2%;
}
.ammountOfTasks {
  font-size: 20px;
}
</style>
