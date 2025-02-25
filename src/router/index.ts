import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/content",
      name: "content",
      //@ts-ignore
      component: () => import("../views/ContentView.vue")
    },
    {
      path: "/map",
      name: "map",
      component: () => import("../views/SovMapView.vue")
    }
  ]
})

export default router
