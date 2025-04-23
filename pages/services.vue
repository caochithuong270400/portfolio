<template>
  <Services />
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import Services from "~/components/Services.vue";
export default {
  components: {
    Services,
  },
  data() {
    return {
      store: storeToRefs(useStore()),
      storeMethod: useStore(),
    };
  },
};
</script>