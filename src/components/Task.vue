<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="wholeTask">
    <div class="wholeTaskWithoutX" @dblclick="onDelete(task.id)">
      <label class="container">
        <input
          class="checkbox"
          :checked="task.done"
          type="checkbox"
          @click.stop="$emit('change-status', task.id)"
        />
        <div @dblclick.stop class="checkmark"></div>
      </label>
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
  font-size: 22px;
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
.undone-time {
  color: #8e88a7;
  font-size: 15px;
  font-weight: bold;
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
.checkbox:checked {
  margin-right: 2em;
  transform: scale(0.9);
  color: red;
}
.done-time {
  color: #dcd9e8;
  font-size: 15px;
  font-weight: bold;
}
.checkbox {
  height: 20px;
  width: 20px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  outline: solid 1px #8e88a7;
  border-radius: 3px;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ff626f;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 1px;
  width: 5px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
