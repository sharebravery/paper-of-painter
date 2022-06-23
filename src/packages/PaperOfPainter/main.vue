<!--
 * @Description: ^_^
 * @Author: sharebravery
-->
<template>
  <div class="container" ref="container">
    <div class="canvas" ref="canvas">
      <img
        src="https://s.cn.bing.net/th?id=OHR.AmazonianEcuador_ZH-CN9873999948_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"
        alt=""
      />
      <svg ref="target"></svg>
    </div>
    <!-- <a-button type="primary" @click="undo()">undo</a-button> -->
    <a-button type="primary" @click="test()">test</a-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "PaperOfPainter",
};
</script>

<script setup lang="ts">
import { Component, onMounted, ref } from "vue";
import SvgIcon from "./components/SvgIcon.vue";
import { toRefs } from "@vueuse/core";
// import { useDrauu } from "@vueuse/integrations/useDrauu";
import { createDrauu } from "drauu";

const container = ref(null);

const canvas = ref(null);

const target = ref<SVGSVGElement>();

// const {
//   undo,
//   redo,
//   canUndo,
//   canRedo,
//   brush,
//   onStart,
//   onChanged,
//   drauuInstance,
// } = useDrauu(target, {
//   brush: {
//     color: "green",
//     size: 3,
//   },
// });

// const { color, size } = toRefs(brush);

// onStart((e) => {
//   console.log(
//     "%c [ container ]-37",
//     "font-size:13px; background:pink; color:#bf2c9f;",
//     container.value.style
//   );
// });#
const cc = ref();

function test() {
  console.log(
    "%c [ cc ]-67",
    "font-size:13px; background:pink; color:#bf2c9f;",
    cc
  );
}

onMounted(() => {
  cc.value = createDrauu({
    el: target.value,
    brush: {
      mode: "stylus", // 'line', 'reactangle', 'ellipse'
      color: "skyblue",
      size: 5,
    },
  });
  // console.log(
  //   "%c [ aa ]-65",
  //   "font-size:13px; background:pink; color:#bf2c9f;",
  //   aa
  // );
});
</script>

<style lang="less">
.container {
  background: #ddd;
  width: 500px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  .canvas {
    position: relative;
    transform: scale(0.5);
    img {
      width: 100%;
    }
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
