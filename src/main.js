import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const pinia = createPinia();
const routes = [
  {
    path: "/",
    meta: { title: "Главная | DarkLoft - Стеклянные перегородки в стиле Лофт" },
    component: MainPage,
  },
  {
    path: "/lofts/:id",
    meta: {
      title:
        "Перегородки в квартиру Лофт | DarkLoft - Стеклянные перегородки в стиле Лофт",
    },
    component: () => import("./components/pages/LoftDetailPage.vue"),
  },
  {
    path: "/contacts",
    meta: {
      title: "Контакты | DarkLoft - Стеклянные перегородки в стиле Лофт",
    },
    component: () => import("./components/pages/ContactPage.vue"),
  },
  {
    path: "/news",
    meta: {
      title: "Новости | DarkLoft - Стеклянные перегородки в стиле Лофт",
    },
    component: () => import("./components/pages/NewsPage.vue"),
  },
  {
    path: "/news/:id",
    meta: {
      title:
        "Особенности перегородок в стиле Лофт | DarkLoft - Стеклянные перегородки в стиле Лофт",
    },
    component: () => import("./components/pages/NewsDetailPage.vue"),
  },
  {
    path: "/delivery",
    meta: {
      title:
        "Доставка и оплата | DarkLoft - Стеклянные перегородки в стиле Лофт",
    },
    component: () => import("./components/pages/DeliveryPage.vue"),
  },
  {
    path: "/production",
    meta: {
      title: "Производство | DarkLoft - Стеклянные перегородки в стиле Лофт",
    },
    component: () => import("./components/pages/ProductionPage.vue"),
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
  window.scrollTo(0, 0);
  next();
});

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
