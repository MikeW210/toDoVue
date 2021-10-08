<template>
  <h1>Undone Tasks</h1>
  <template v-bind:key="undoneTask.id" v-for="undoneTask in undoneTasks">
    <div class="undoneTasks">
      <Task
        @change-status="this.$emit('change-status', undoneTask.id)"
        @delete-task="$emit('delete-task', undoneTask.id)"
        :task="undoneTask"
      />
    </div>
  </template>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "UndoneTasks",
  props: {
    undoneTasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "change-status"],
};
</script>

<style scoped>
.undoneTasks {
  padding: 0% 2%;
}
h1 {
  padding: 0% 2%;
}
</style>
