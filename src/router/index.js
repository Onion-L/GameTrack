import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "../view/Login/LoginPage.vue";
import LayOut from "../layout/LayOut.vue";
import HomePage from "../page/Home/HomePage.vue";
import Dashboard from "../view/Dashboard/Dashboard.vue";
import TeamPage from "../view/Teams/TeamPage.vue";
import PlayerPage from "../view/Players/PlayerPage.vue";
import PlayerDetailPage from "../view/PlayerDetail/PlayerDetailPage.vue";
import AnalysisPage from "../view/Analysis/AnalysisPage.vue";
import SettingPage from "../view/Settings/SettingPage.vue";
import { authStoreHook } from "../stores/authStore.js";
import ErrorPage from "../page/Error/ErrorPage.vue";

const constantRoutes = [
	{
		path: "/home",
		component: HomePage
	},
	{
		path: "/",
		component: LayOut,
		redirect: "/dashboard",
		children: [
			{
				path: "dashboard",
				component: Dashboard
			},
			{
				path: "teams",
				component: TeamPage
			},
			{
				path: "players",
				component: PlayerPage
			},
			{
				path: "analysis",
				component: AnalysisPage
			}
		]
	},
	{
		path: "/detail/:id",
		component: PlayerDetailPage
	},
	{
		name: "Login",
		path: "/login",
		component: LoginPage
	},
	{
		path: "/settings",
		component: SettingPage
	},
	{
		path: "/:pathMatch(.*)*",
		component: ErrorPage
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
});

/*router.beforeEach((to, from, next) => {
    const authStore = authStoreHook();
    if(to.name !== 'Login') {
        next({path: '/login'})
    }else {
        next();
    }
})*/

export default router;
