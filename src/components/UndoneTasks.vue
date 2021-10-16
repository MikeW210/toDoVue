<template>
  <template :key="undoneTask.id" v-for="undoneTask in undoneTasks">
    <div class="undoneTasks">
      <Task :task="undoneTask" />
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
    ...mapGetters(["undoneTasks"]),
  },
};
</script>

<style scoped>
h1 {
  padding-left: 0.5em;
}
</style>
