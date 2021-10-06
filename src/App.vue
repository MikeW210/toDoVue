<template>
  <div class="container">
    <AddTask @add-task="addTask" />
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

export default {
  name: "App",
  components: {
    AddTask,
    Tasks,
  },
  data() {
    return {
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
  methods: {
    addTask(task) {
      console.log(task);
      this.tasks.push(task);
      console.log(this.tasks + "dodaes task");
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
  // created() {
  //   this.tasks = [

  //   ];
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 70%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
