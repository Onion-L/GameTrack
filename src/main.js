import { createApp } from "vue";
import "./style/global.less";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router/index.js";
import store from "./stores/index";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-infinite-scroll.css";
import "element-plus/theme-chalk/el-scrollbar.css";

const app = createApp(App);

app.use(router).use(store);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount("#app");
