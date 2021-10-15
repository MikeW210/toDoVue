<template>
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
import { mapGetters } from "vuex";
export default {
  name: "UndoneTasks",
  components: {
    Task,
  },
  computed: {
    ...mapGetters({
      undoneTasks: "undoneTasks",
    }),
  },
  emits: ["delete-task", "change-status"],
};
</script>

<style scoped>
h1 {
  padding-left: 0.5em;
}
</style>
