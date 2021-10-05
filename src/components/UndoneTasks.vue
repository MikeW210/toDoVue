<template>
  <h1>Undone Tasks</h1>
  <template v-bind:key="undoneTask.id" v-for="undoneTask in undoneTasks">
    <p :key="undoneTask.done" v-if="!undoneTask.done">
      <SpecificTask
        @change-status="this.$emit('change-status', undoneTask.id)"
        @delete-task="$emit('delete-task', undoneTask.id)"
        :specificTask="undoneTask"
      />
    </p>
  </template>
</template>

<script>
import SpecificTask from "./SpecificTask.vue";
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
