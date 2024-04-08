import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "../view/Login/LoginPage.vue";
import LayOut from "../layout/LayOut.vue";
import HomePage from "../page/Home/HomePage.vue";
import Dashboard from "../view/Dashboard/Dashboard.vue";
import MatchPage from "../view/Match/MatchPage.vue";
import PlayerPage from "../view/Players/PlayerPage.vue";
import PlayerDetailPage from "../view/PlayerDetail/PlayerDetailPage.vue";
import AnalysisPage from "../view/Analysis/AnalysisPage.vue";
import ErrorPage from "../page/Error/ErrorPage.vue";
import RegisterPage from "../view/Register/RegisterPage.vue";
import TeamPage from "../view/Team/TeamPage.vue";

const constantRoutes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/",
    component: LayOut,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "matches",
        component: MatchPage,
      },
      {
        path: "players",
        component: PlayerPage,
      },
      {
        path: "players/:id",
        component: PlayerDetailPage,
      },
      {
        path: "analysis",
        component: AnalysisPage,
      },
      {
        path: "team",
        component: TeamPage,
      },
    ],
  },
  {
    path: "/players/dashboard",
    redirect: "/dashboard",
  },
  {
    path: "/players/players",
    redirect: "/players",
  },
  {
    path: "/players/analysis",
    redirect: "/analysis",
  },
  {
    path: "/players/teams",
    redirect: "/teams",
  },
  {
    path: "/auth",
    children: [
      {
        name: "Login",
        path: "login",
        component: LoginPage,
      },
      {
        name: "Register",
        path: "register",
        component: RegisterPage,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  if (
    !(to.name === "Register" || to.name === "Login") &&
    !localStorage.getItem("gt-user")
  ) {
    next({ path: "/auth/login" });
  } else {
    next();
  }
});

export default router;
