/*
 * @Description: ^_^
 * @Author: sharebravery
 */
import { createApp } from "vue";
import App from "./App.vue";
import PaperOfPainter from "./packages/index";

const app = createApp(App);

app.use(PaperOfPainter);

app.mount("#app");
