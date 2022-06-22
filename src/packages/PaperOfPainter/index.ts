/*
 * @Description: ^_^
 * @Author: sharebravery
 */
// 导入组件，组件必须声明 name
import PaperOfPainter from "./main.vue";

// 为组件添加 install 方法，用于按需引入
PaperOfPainter.install = function (Vue: any) {
  Vue.component(PaperOfPainter.name, PaperOfPainter);
};

export default PaperOfPainter;
