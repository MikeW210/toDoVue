<template>
  <h1>Done Tasks</h1>
  <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <p>
      <SpecificTask
        @change-status="$emit('change-status', doneTask.id)"
        @delete-task="$emit('delete-task', doneTask.id)"
        :Task="doneTask"
      />
    </p>
  </template>
</template>

<script>
import SpecificTask from "./Task.vue";
export default {
  name: "DoneTasks",
  props: {
    doneTasks: Array,
  },
  components: {
    SpecificTask,
  },
  emits: ["delete-task", "change-status"],
};
</script>
