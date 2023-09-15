import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexView from "../views/IndexView.vue";
import LoginView from "../views/LoginView.vue";
import ScoreCardView from "../views/ScoreCardView.vue";
import PubView from "../views/PubView.vue";
import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/",
            name: "",
            component: MainLayout,
            children: [
                {
                    path: "/",
                    name: "index",
                    component: IndexView,
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
                {
                    path: "/pub",
                    name: "pub",
                    component: PubView,
                },
            ],
        },
    ],
});

export default router;
