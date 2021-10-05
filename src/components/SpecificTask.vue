<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="task">
    <h2 class="list-group-item">
      {{ specificTask.text }}
      <i
        @click="onDelete(specificTask.id)"
        class="fa fa-close"
        style="font-size:48px;color:red"
      ></i>
    </h2>
  </div>
</template>

<script>
export default {
  name: "SpecificTask",
  data() {
    return {};
  },
  props: {
    specificTask: Object,
  },
  methods: {
    onDelete(id) {
      console.log(id);
      this.$emit("delete-task", id);
    },
  },
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
</style>
