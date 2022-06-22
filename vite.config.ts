/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2022-06-09 14:32:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-22 11:07:49
 */
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: "/src/",
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "Ch2Lib",
      fileName: (format) => `ch2-lib.${format}.ts`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
