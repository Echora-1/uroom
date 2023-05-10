import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/moscow" },
  {
    path: "/moscow",
    meta: { title: "UROOM | Москва" },
    component: MainPage,
  },
  {
    path: "/volgograd",
    meta: { title: "UROOM | Волгоград" },
    component: MainPage,
  },
  {
    path: "/moscow/reservation",
    meta: { title: "UROOM | Бронирование Москва" },
    component: () => import("./components/pages/ReservationPage.vue"),
  },
  {
    path: "/moscow/contacts",
    meta: { title: "UROOM | Контакты Москва" },
    component: () => import("./components/pages/ContactsPage.vue"),
  },
  {
    path: "/moscow/feedback",
    meta: { title: "UROOM | Обратная связь Москва" },
    component: () => import("./components/pages/FeedbackPage.vue"),
  },
  {
    path: "/volgograd/reservation",
    meta: { title: "UROOM | Бронирование Волгоград" },
    component: () => import("./components/pages/ReservationPage.vue"),
  },
  {
    path: "/volgograd/contacts",
    meta: { title: "UROOM | Контакты Волгоград" },
    component: () => import("./components/pages/ContactsPage.vue"),
  },
  {
    path: "/volgograd/feedback",
    meta: { title: "UROOM | Обратная связь Волгоград" },
    component: () => import("./components/pages/FeedbackPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

const app = createApp(App);

app.use(router);
app.mount("#app");
