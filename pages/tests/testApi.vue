<template>
  <v-card>
    <v-card-text>
      <div
        v-if="data"
        style="
          background-color: white;
          color: black;
          width: 500px;
          height: 100px;
        "
      >
        <div v-for="user in data" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </div>
      </div>
      <div v-else-if="error">Lỗi: {{ error }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    await this.select();
  },
  methods: {
    async select() {
      const { results } = await $fetch("/api/getProject", {
        method: "post",
        body: {},
      });
      console.log("result delete car detail", results);
      if (results) {
        console.log("results", results);
        this.data = results;
        console.log("this.data", this.data);
      }
    },
  },
};
</script>