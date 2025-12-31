import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Overview",
      component: () => import("../views/Overview.vue"),
      meta: {
        title: "Übersicht",
      },
    },
    {
      path: "/ueber-uns",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Über uns",
      },
    },
    {
      path: "/kontakt",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: {
        title: "Kontakt",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
      meta: {
        title: "Seite nicht gefunden",
      },
    },
  ],
});

/**
 * Optional: Seitentitel setzen
 */
router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} – Jens und Lars`
    : "Jens und Lars";
});

export default router;
