<template>
  <Resume />
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import Resume from "~/components/Resume.vue";
export default {
  components: {
    Resume,
  },
  data() {
    return {
      store: storeToRefs(useStore()),
      storeMethod: useStore(),
    };
  },
  mounted() {
    this.checkDevice();
    window.removeEventListener("resize", this.checkDevice());
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice());
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>