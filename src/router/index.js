import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from "../view/Home/HomePage.vue";
import LoginPage from "../view/Login/LoginPage.vue";
import LayOut from "../layout/LayOut.vue";
import Dashboard from "../view/Dashboard/Dashboard.vue";

const constantRoutes = [
    {
        path:'/',
        component:LayOut,
        redirect:'/home',
        children:[
            {
                path:'home',
                component:HomePage
            },
            {
                path:'dashboard',
                component:Dashboard
            },
        ]
    },
    {
        path:'/login',
        component:LoginPage
    },

];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes:constantRoutes, // `routes: routes` 的缩写
});

export default router;

