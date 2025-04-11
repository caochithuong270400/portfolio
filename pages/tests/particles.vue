<template>
  <NuxtParticles id="tsparticles" :options="options">
  </NuxtParticles>
</template>
<script>
// import CobParticleVue from "../components/CobParticles.vue";
export default {
  // components: {
  //   CobParticleVue,
  // },
  data() {
    return {
      showCard: true,

      redBufferWidth: 30, // Phần trăm chiều rộng của màu đỏ
      greenBufferWidth: 20, // Phần trăm chiều rộng của màu xanh
      yellowBufferWidth: 15, // Phần trăm chiều rộng của màu vàng
      purpleBufferWidth: 15, // Phần trăm chiều rộng của màu vàng
      options: {
        background: {
          color: "#000",
        },
        particles: {
          links: {
            enable: true,
          },
          move: { enable: true, speed: 6, direction: "none" },
          number: {
            value: 100,
          },
        },
      },
    };
  },
  methods: {
    toggleCard() {
      this.showCard = !this.showCard;
    },
    // onLoad(container) {
    //   // Làm điều gì đó với container
    //   container.pause();
    //   setTimeout(() => container.play(), 2000);
    // },
    particlesLoaded(container) {
      console.log(container);
    },
  },
};
</script>