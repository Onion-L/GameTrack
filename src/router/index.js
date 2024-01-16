import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "../view/Login/LoginPage.vue";
import LayOut from "../layout/LayOut.vue";
import HomePage from "../page/Home/HomePage.vue";
import Dashboard from "../view/Dashboard/Dashboard.vue";
import TeamPage from "../view/Teams/TeamPage.vue";
import PlayerPage from "../view/Players/PlayerPage.vue";
import AnalysisPage from "../view/Analysis/AnalysisPage.vue";
import SettingPage from "../view/Settings/SettingPage.vue";
import Test from "../../Test/Test.vue";
import { authStoreHook } from "../stores/authStore.js";
import ErrorPage from "../page/Error/ErrorPage.vue";

const constantRoutes = [
	{
		path: "/home",
		component: HomePage
	},
	{
		path: "/TestGround",
		component: Test
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
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes: constantRoutes // `routes: routes` 的缩写
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
