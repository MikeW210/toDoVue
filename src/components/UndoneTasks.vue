<template>
  <h1>Undone Tasks</h1>
  <template v-for="doneTask in doneTasks" :key="doneTask.id">
    <p v-if="!doneTask.done">
      <SpecificTask :specificTask="doneTask" />
    </p>
  </template>
</template>

<script>
import axios from "axios";
import SpecificTask from "./SpecificTask.vue";
export default {
  data() {
    return {
      doneTasks: [],
      done: false,
    };
  },
  components: {
    SpecificTask,
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/Tasks");

      this.doneTasks = res.data;
      console.log(this.doneTasks);
    } catch (e) {
      alert(e);
    }
  },
};
</script>
