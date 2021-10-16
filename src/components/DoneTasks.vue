<template>
  <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <div class="doneTasks">
      <Task :task="doneTask" />
    </div>
  </template>
</template>

<script>
import Task from "./Task.vue";
import { mapGetters } from "vuex";

export default {
  name: "DoneTasks",
  computed: {
    ...mapGetters(["doneTasks"]),
  },
  components: {
    Task,
  },
};
</script>

<style scoped>
h1 {
  padding-left: 0.5em;
}
</style>
