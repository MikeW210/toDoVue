<template>
  <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <div class="doneTasks">
      <Task
        @change-status="$emit('change-status', doneTask.id)"
        @delete-task="$emit('delete-task', doneTask.id)"
        :task="doneTask"
      />
    </div>
  </template>
</template>

<script>
import Task from "./Task.vue";
import { mapGetters } from "vuex";

export default {
  name: "DoneTasks",
  props: {},
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    ...mapGetters({
      doneTasks: "doneTasks",
    }),
  },
  components: {
    Task,
  },
  emits: ["delete-task", "change-status"],
};
</script>
<style scoped>
h1 {
  padding-left: 0.5em;
}
</style>
