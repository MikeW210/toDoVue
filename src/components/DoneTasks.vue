<template>
  <h1>Done Tasks</h1>
  <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <p :key="doneTask.id" v-if="doneTask.done">
      <SpecificTask :specificTask="doneTask" />
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
};
</script>
