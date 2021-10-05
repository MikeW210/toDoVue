<template>
  <DoneTasks :doneTasks="specificTasks" />
  <UndoneTasks
    @delete-task="$emit('delete-task', specificTask.id)"
    v-bind:undoneTasks="specificTasks"
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
  emits: ["delete-task"],
  created() {
    this.specificTasks = this.tasks;
  },
};
</script>
