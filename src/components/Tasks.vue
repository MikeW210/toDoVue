<template>
  <DoneTasks />
  <UndoneTasks />
</template>

<script>
import DoneTasks from "./DoneTasks.vue";
import UndoneTasks from "./UndoneTasks.vue";

export default {
  name: "Tasks",

  components: {
    DoneTasks,
    UndoneTasks,
  },
  // emits: ["delete-task", "change-status"],

  computed: {},
};
</script>
