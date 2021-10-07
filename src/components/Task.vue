<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div
    @dblclick="$emit('change-status', Task.id)"
    :class="[Task.done ? 'changedStatus' : '', 'task']"
  >
    <h2 class="list-group-item">
      {{ Task.text }}
      <i
        @click="onDelete(Task.id)"
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
    Task: Object,
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
  background-color: blanchedalmond;
}
.task h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.changedStatus {
  text-decoration: line-through;
}
</style>
