<template>
  <h1>Done Tasks</h1>
  <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <p :key="doneTask.id" v-if="doneTask.done">
      <SpecificTask
        @change-status="this.$emit('change-status', doneTask.id)"
        @delete-task="$emit('delete-task', doneTask.id)"
        :specificTask="doneTask"
      />
    </p>
  </template>
</template>

<script>
import SpecificTask from "./SpecificTask.vue";
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
