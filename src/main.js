import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
const app = createApp(App);

app.use(store);

app.mount("#app");
