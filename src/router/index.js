import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexView from "../views/IndexView.vue";
import LoginView from "../views/LoginView.vue";
import ScoreCardView from "../views/ScoreCardView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: IndexView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/home",
            name: "home",
            component: HomeView,
        },
        {
            path: "/scorecard",
            name: "scorecard",
            component: ScoreCardView,
        },
    ],
});

export default router;
