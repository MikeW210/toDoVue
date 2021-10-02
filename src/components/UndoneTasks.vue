<template>
  <h1>Undone Tasks</h1>
  <ul>
    <template v-for="doneTask in doneTasks" :key="doneTask.id">
      <li v-if="!doneTask.done">
        {{ doneTask.task }}
      </li>
    </template>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      doneTasks: [],
      done: false,
    };
  },
  async created() {
    try {
      const res = await axios
        .get("http://localhost:3000/Tasks", {done: false})
        
        this.doneTasks = res.data
      console.log(this.doneTasks);
    } catch (e) {
      alert(e);
    }
  },
};
</script>
