<template>
  <UndoneTasks
    @change-status="changeStatus"
    @delete-task="deleteTask"
    :undoneTasks="specificTasks"
  />
  <DoneTasks
    @change-status="changeStatus"
    @delete-task="deleteTask"
    :doneTasks="specificTasks"
  />
</template>

<script>
import DoneTasks from "./DoneTasks.vue";
import UndoneTasks from "./UndoneTasks.vue";
export default {
  data() {
    return {
      specificTasks: [],
    };
  },
  name: "Tasks",
  props: {
    tasks: Array,
  },

  components: {
    DoneTasks,
    UndoneTasks,
  },
  emits: ["delete-task", "change-status"],
  created() {
    this.specificTasks = this.tasks;
    console.log(this.specificTasks + "created w tasks");
  },
  methods: {
    deleteTask(id) {
      const taskToDelete = this.specificTasks.find((task) => task.id === id);
      console.log(taskToDelete.id);
      this.$emit("delete-task", taskToDelete.id);
    },
    changeStatus(id) {
      const taskToChangeStatus = this.specificTasks.find(
        (task) => task.id === id
      );
      console.log(taskToChangeStatus.id);
      this.$emit("change-status", taskToChangeStatus.id);
    },
  },
};
</script>
