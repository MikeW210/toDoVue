<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="wholeTask">
    <div class="wholeTaskWithoutX" @dblclick="onDelete(task.id)">
      <input
        class="checkbox"
        :checked="task.done"
        type="checkbox"
        @click="$emit('change-status', task.id)"
      />
      <h2 :class="[task.done ? 'changedStatus' : 'undoneTasks', 'task']">
        {{ task.text }}
      </h2>
      <p :class="[task.done ? 'done-time' : 'undone-time']">{{ task.time }}</p>
    </div>
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
  display: flex;
  border-radius: 10px;
  flex: 6;
  font-size: 25px;
}

.task h2 {
  display: flex;
  align-items: center;
}
.changedStatus {
  color: #dcd9e8;
  text-decoration: line-through;
}
.undoneTasks {
  color: #8e88a7;
}
template :hover {
  color: blue;
}
.wholeTask:hover {
  background: rgb(243, 243, 255);
  border-left: solid blue 4px;
}

.wholeTask {
  display: flex;
  align-items: center;
  border-bottom: solid #e0e4eb 1px;
  padding: 5px;
}
.wholeTaskWithoutX {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0em 1em;
}
.checkbox {
  height: 25px;
  width: 25px;
}
.done-time {
  color: #dcd9e8;
}
.checkbox {
  height: 20px;
  width: 20px;
}
</style>
