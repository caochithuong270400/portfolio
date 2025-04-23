<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" class="pa-0">
        <v-card class="work-card card-d-none">
          <v-card-title class="text-with-border" style="font-size: 5rem">
            0{{ model + 1 }}
          </v-card-title>
          <v-card-subtitle style="margin-top: -2rem">
            <span>PROJECT {{ model + 1 }}</span>
          </v-card-subtitle>
          <v-card-text>
            <div>Text</div>
            <div>
              <span class="card-footer">
                <b> Nuxt.js </b>
              </span>
            </div>
          </v-card-text>
        </v-card></v-col
      >
      <v-col cols="12" lg="6" md="6" sm="12" class="pa-0">
        <v-carousel
          v-model="model"
          :width="store.state.isMobile ? '90vw' : '30vw'"
          :height="store.state.isMobile ? '90vw' : '30vw'"
          :show-arrows="false"
          :vertical-delimiters="store.state.isMobile ? false : true"
          :direction="store.state.isMobile ? 'horizontal' : 'vertical'"
          style="border-radius: 15%"
        >
          <v-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
            <v-sheet color="#00000000" height="100%" tile>
              <div class="d-flex fill-height justify-center align-center">
                <!-- <div class="text-h2">Slide {{ i + 1 }}</div> -->

                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/dev-t-ef558.appspot.com/o/portfolio%2Fwork%2Fthumnail%2Fgnou_responsive.png?alt=media&token=3f10b71d-3500-479d-9ec9-7da347723405"
                  cover
                  height="100%"
                ></v-img>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
export default {
  data() {
    return {
      store: storeToRefs(useStore()),
      storeMethod: useStore(),
      slides: [
        {
          colors: "#f44336",
          prj_name: "Project 1",
          content: "This is the project",
          technology: [
            {
              name: "NuxtJS",
              icon: "nuxtjs.svg",
            },
            {
              name: "Vuetify",
              icon: "vuetify.svg",
            },
            {
              name: "NodeJS",
              icon: "NodeJS.svg",
            },
            {
              name: "Hasura",
              icon: "hasura.svg",
            },
          ],
        },
      ],
      projects: [
        {
          name: null,
          url_img: null,
          content: null,
          technology: [
            {
              name: null,
              icon: null,
            },
          ],
        },
      ],
      colors: [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
      ],
      model: 2,
    };
  },

  methods: {},
};
</script>

<style scoped>
.work-card {
  background-color: #00000000;
}
.card-footer {
  color: var(--neon-color);
}
</style>