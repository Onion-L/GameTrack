import { createApp } from "vue";
import "./style/global.less";
import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router/index.js";


const app = createApp(App);

app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount("#app");
