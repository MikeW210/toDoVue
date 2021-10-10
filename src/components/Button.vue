<template>
  <div @click="onClick" :style="{ background: color }" class="button">
    <span v-if="showAddTask">
      <i class="fas fa-times"></i>
    </span>
    <span v-else>
      <i class="fas fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    showAddTask: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  border: none;
  height: 60px;
  width: 60px;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  box-shadow: 2px 2px 2px rgb(149, 147, 147);
}
</style>
