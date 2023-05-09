import { createApp } from "vue";
import App from "./App.vue";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";

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
  {
    path: "/moscow/reservation",
    component: () => import("./components/pages/ReservationPage.vue"),
  },
  {
    path: "/moscow/contacts",
    component: () => import("./components/pages/ContactsPage.vue"),
  },
  {
    path: "/moscow/feedback",
    component: () => import("./components/pages/FeedbackPage.vue"),
  },
  {
    path: "/volgograd/reservation",
    component: () => import("./components/pages/ReservationPage.vue"),
  },
  {
    path: "/volgograd/contacts",
    component: () => import("./components/pages/ContactsPage.vue"),
  },
  {
    path: "/volgograd/feedback",
    component: () => import("./components/pages/FeedbackPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
