import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", meta: { title: "Darkloft" }, component: MainPage },
  {
    path: "/lofts/:id",
    meta: { title: "Перегородки в квартиру Лофт" },
    component: () => import("./components/pages/LoftDetailPage.vue"),
  },
];

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

const app = createApp(App);

app.use(router);
app.mount("#app");
