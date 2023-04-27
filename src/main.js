import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import VueFullscreen from "vue-fullscreen";
import VueGoogleMaps from "@fawmi/vue-google-maps";
const routes = [
  { path: "/", component: MainPage },
  {
    path: "/articles",
    component: () => import("./components/pages/ArticlesPage.vue"),
  },
  {
    path: "/articles/:id",
    component: () => import("./components/pages/ArticleDetailsPage.vue"),
  },
  {
    path: "/services/:id",
    component: () => import("./components/pages/ServiceDetailsPage.vue"),
  },
  {
    path: "/contact",
    component: () => import("./components/pages/ContactPage.vue"),
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
