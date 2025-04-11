<template>
  <v-container>
    <TitleAboutMe />
    <NuxtParticles id="tsparticles" :options="options">
    </NuxtParticles>
  </v-container>
</template>
<script>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import TitleAboutMe from "~/components/Home/TitleAboutMe.vue";
// import CobParticleVue from "../components/CobParticles.vue";
export default {
  components: {
    TitleAboutMe,
  },
  data() {
    return {
      store: storeToRefs(useStore()),
      storeMethod: useStore(),
      showCard: true,

      options: {
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        // background: {
        //   color: "#000",
        // },

        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          color: "#aaa",
          links: {
            enable: true,
            distance: 200,
            color: "#aaa",
            opacity: 0.4,
            width: 1,
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#aaa" },
            polygon: { nb_sides: 5 },
          },
          move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
          number: {
            value: 50,
          },
        },
      },
    };
  },
  methods: {
    toggleCard() {
      this.store.state.app_bar = !this.store.state.app_bar;
    },

    particlesLoaded(container) {
      console.log(container);
    },
  },
};
</script>

<style scoped>
.bg-white {
  background: none !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active trong phiên bản <2.1.8 */ {
  opacity: 0;
}
#tsparticles {
  position: absolute; /* hoặc relative nếu cần */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10; /* Đặt z-index thấp hơn nội dung khác */
}
</style>