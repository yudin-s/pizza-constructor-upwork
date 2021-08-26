import Vue from "vue";
import VueRouter from "vue-router";
import Pizza from "@/views/Pizza";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pizza",
    component: Pizza,
  },
  {
    path: "/topping",
    name: "Choose Toping",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Topping.vue"),
  },
  {
    path: "/topping",
    name: "Customer Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Topping.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
