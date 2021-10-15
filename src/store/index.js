import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        text: "umyj dupe",
        done: true,
        time: "19;34",
      },
      {
        id: 2,
        text: "dupa",
        done: false,
        time: "12;34",
      },
    ],
  },
  mutations: {
    add_task(state, task) {
      state.tasks.push(task);
      console.log(state.tasks);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(index, 1);
      console.log(state.tasks);
    },
    changeStatus(state, id) {
      console.log("change status", id);
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );

      console.log(state.tasks);
    },
  },
  actions: {},
  getters: {
    allTasks: (state) => state.tasks,
    numberOfTasks: (state) => state.tasks.length,
    doneTasks: (state) => state.tasks.filter((task) => task.done),
    undoneTasks: (state) => state.tasks.filter((task) => !task.done),
  },
});
