<template>
  <client-only>
    <div id="particles-js"></div>
  </client-only>
</template>

<script>
export default {
  mounted() {
    this.$particlesJS("particles-js", {
      particles: {
        number: { value: 380, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 6, direction: "none" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  },
};
</script>

<style scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #b61924;
}
</style>
