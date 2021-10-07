<template>
  <UndoneTasks
    @change-status="changeStatus"
    @delete-task="deleteTask"
    :undoneTasks="showUndoneTasks"
  />
  <DoneTasks
    @change-status="changeStatus"
    @delete-task="deleteTask"
    :doneTasks="showDoneTasks"
  />
</template>

<script>
import DoneTasks from "./DoneTasks.vue";
import UndoneTasks from "./UndoneTasks.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },

  components: {
    DoneTasks,
    UndoneTasks,
  },
  emits: ["delete-task", "change-status"],
  computed: {
    showDoneTasks() {
      const doneTasks = this.tasks.filter((task) => task.done === true);
      console.log(doneTasks);
      return doneTasks;
    },
    showUndoneTasks() {
      const undoneTasks = this.tasks.filter((task) => task.done !== true);
      console.log(undoneTasks);
      return undoneTasks;
    },
  },

  methods: {
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
