<template>
  <UndoneTasks
    @change-status="changeStatus"
    @delete-task="deleteTask"
    :undoneTasks="tasks"
  />
  <DoneTasks
    @change-status="changeStatus"
    @delete-task="deleteTask"
    :doneTasks="tasks"
  />
</template>

<script>
import DoneTasks from "./DoneTasks.vue";
import UndoneTasks from "./UndoneTasks.vue";
export default {
  // data() {
  //   return {
  //     specificTasks: [],
  //   };
  // },
  name: "Tasks",
  props: {
    tasks: Array,
  },

  components: {
    DoneTasks,
    UndoneTasks,
  },
  emits: ["delete-task", "change-status"],
  // computed: {
  //   showTasks() {
  //     return this.tasks;
  //   },
  // },
  // created() {
  //   this.specificTasks = this.tasks;
  //   console.log(this.specificTasks + "created w tasks");
  // },
  methods: {
    // deleteTask(id) {
    //   console.log(id + "dupa");
    //   this.specificTasks = this.specificTasks.filter((task) => task.id !== id);
    //   console.log(this.tasks);
    //   console.log("wyjebales task");
    // },
    // changeStatus(id) {
    //   console.log("chcesz zmienic task" + id);
    //   this.specificTasks = this.specificTasks.map((task) =>
    //     task.id === id ? { ...task, done: !task.done } : task
    //   );
    //   console.log(this.specificTasks);
    // },
    deleteTask(id) {
      const taskToDelete = this.tasks.find((task) => task.id === id);
      console.log(taskToDelete.id);
      this.$emit("delete-task", taskToDelete.id);
    },
    changeStatus(id) {
      const taskToChangeStatus = this.tasks.find((task) => task.id === id);
      console.log(taskToChangeStatus.id);
      this.$emit("change-status", taskToChangeStatus.id);
    },
  },
};
</script>
