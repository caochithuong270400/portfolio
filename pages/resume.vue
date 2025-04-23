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
  async mounted() {},
  beforeUnmount() {},
  methods: {},
};
</script>