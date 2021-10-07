<template>
  <h1>Undone Tasks</h1>
  <template v-bind:key="undoneTask.id" v-for="undoneTask in undoneTasks">
    <p>
      <SpecificTask
        @change-status="this.$emit('change-status', undoneTask.id)"
        @delete-task="$emit('delete-task', undoneTask.id)"
        :Task="undoneTask"
      />
    </p>
  </template>
</template>

<script>
import SpecificTask from "./Task.vue";
export default {
  name: "UndoneTasks",
  props: {
    undoneTasks: Array,
  },
  components: {
    SpecificTask,
  },
  emits: ["delete-task", "change-status"],
};
</script>
