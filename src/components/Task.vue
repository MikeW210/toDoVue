<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div
    @dblclick="$emit('change-status', task.id)"
    :class="[task.done ? 'changedStatus' : 'undoneTasks', 'task']"
  >
    <h2 class="list-group-item">
      {{ task.text }}
      <i
        @click="onDelete(task.id)"
        class="fa fa-close"
        style="font-size:48px;color:red"
      ></i>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
  },
  emits: ["delete-task", "change-status"],
};
</script>

<style scoped>
.task {
  border-radius: 10px;
}

.task h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.changedStatus {
  text-decoration: line-through;
}
.undoneTasks.hover {
  color: blue;
}
.task h2:hover {
  background: rgb(243, 243, 255);
  border-left: solid blue 4px;
}
</style>
