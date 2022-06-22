/*
 * @Description: ^_^
 * @Author: sharebravery
 */
import { App } from "vue";

// 导入单个组件
import PaperOfPainterCom from "./PaperOfPainter/index";

export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || alias, component);
  };
  return component as T & any;
};

export const PaperOfPainter = withInstall(PaperOfPainterCom);

// 保存组件
const components: any = { PaperOfPainter };

// 定义 install 方法
function install(app: App, ...options: any[]) {
  for (let name in components) {
    app.component(name, components[name]);
  }
}

if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components,
};
