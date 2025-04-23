<template>
  <v-app :theme="store.state.theme">
    <!-- <client-only>
      <v-overlay v-model="overlay" absolute></v-overlay>
    </client-only> -->
    <NuxtLayout id="text">
      <NuxtPage />
    </NuxtLayout>
    <div
      style="top: -20vh"
      v-if="!store.state.isMobile"
      :id="!store.state.isMobile ? 'light' : ''"
    ></div>
  </v-app>
</template>
<script setup>
import { tsParticles } from "@tsparticles/engine";
import { loadStarShape } from "@tsparticles/shape-star";
import { loadPolygonPath } from "@tsparticles/path-polygon";
await loadStarShape(tsParticles);
await loadPolygonPath(tsParticles);
</script>
<script>
import { defineComponent } from "@vue/composition-api";
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import { parsePayload } from "./node_modules/nuxt/dist/app/composables/payload";
export default defineComponent({
  setup() {},
  data() {
    return {
      // overlay: true,
      store: storeToRefs(useStore()),
      storeMethod: useStore(),
    };
  },
  mounted() {
    this.checkDevice();

    if (!this.store.state.isMobile) {
      this.mouseSetup();
    }
    window.addEventListener("resize", this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice);
  },
  watch: {
    "store.state.isMobile"() {
      console.log("mouse showing", !this.store.state.isMobile);
      if (!this.store.state.isMobile) {
        setTimeout(() => {
          this.mouseSetup();
        }, 1000); // Delay 1s
      }
      // else if (this.store.state.isChangeToMobileFromDesktop) {
      //   location.reload();
      // }
    },
  },
  methods: {
    checkDevice() {
      this.store.state.isMobile = window.innerWidth < 768;
    },

    mouseSetup() {
      let light = document.getElementById("light");
      if (light) {
        document.addEventListener("mousemove", function (event) {
          let mouseX = event.pageX;
          let mouseY = event.pageY;

          let lightWidth = light.offsetWidth / 2;
          let lightHeight = light.offsetHeight / 2;

          // Giới hạn vị trí không vượt quá khung hình
          let x = Math.max(
            0,
            Math.min(mouseX - lightWidth, window.innerWidth - light.offsetWidth)
          );
          let y = Math.max(
            0,
            Math.min(
              mouseY - lightHeight,
              window.innerHeight - light.offsetHeight
            )
          );

          light.style.left = x + "px";
          light.style.top = y + "px";
        });
      }
    },
  },
});
</script>
<style scoped>
#text {
  /* position: relative; */
  cursor: default;
  /* white-space: nowrap; */
  min-height: 100%;
  overflow: hidden;
  /* background: #333; */
}

#light {
  position: absolute;
  transform: translate(0%, 0%);
  width: 50px;
  height: 50px;
  background: var(--light-point-mouse);
  border-radius: 50%;
  pointer-events: none; /* Đảm bảo không chặn sự kiện */
  box-shadow: 0 0 15px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff,
    0 0 300px #fff;
  z-index: 1000;
}
</style>

