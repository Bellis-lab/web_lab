import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/newPost",
    name: "newPost",
    component: () => import("../views/newPost.vue"),
  },
  {
    path: "/postPage",
    name: "postPage",
    component: () => import("../views/postPage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
