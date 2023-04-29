import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import VueFullscreen from "vue-fullscreen";
import VueGoogleMaps from "@fawmi/vue-google-maps";
const routes = [
  { path: "/", redirect: "/moscow" },
  {
    path: "/moscow",
    component: MainPage,
  },
  {
    path: "/volgograd",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(VueFullscreen);
app.use(VueGoogleMaps, {
  load: {
    key: "",
  },
});
app.use(router);
app.mount("#app");
