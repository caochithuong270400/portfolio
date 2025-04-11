<template>
  <v-container>
    <v-card class="card-d-none card-blur card_border pa-2">
      <v-toolbar class="card-no-bg">
        <v-toolbar-title style="font-weight: bold"
          >Why hire me?</v-toolbar-title
        >
      </v-toolbar>

      <div :class="store.state.isMobile ? '' : 'd-flex flex-row'">
        <v-tabs
          v-model="tab"
          style="color: var(--neon-color)"
          :direction="store.state.isMobile ? 'horizontal' : 'vertical'"
          :show-arrows="store.state.isMobile ? true : false"
        >
          <v-tab
            v-for="(item, i) in resumes"
            :key="i"
            :prepend-icon="item.icon"
            :text="item.title"
            :value="i"
          ></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab" style="width: 100%">
          <v-tabs-window-item value="0">
            <v-card class="overflow-y-auto card-no-bg" max-height="60vh">
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    sm="12"
                    v-for="(item, i) in experience"
                    :key="i"
                  >
                    <v-card flat class="card-d-none card_border" height="100%">
                      <v-card-title>
                        <span class="general-info-card-title">
                          {{ item.from_date
                          }}{{ item.to_date ? ` - ${item.to_date}` : "" }}
                        </span>
                      </v-card-title>
                      <v-card-text>
                        <p class="general-info-card-text">
                          {{ item.position }}
                        </p>
                        <span class="card-text-footer">
                          <span style="color: var(--neon-color)">
                            &bull;&nbsp;
                          </span>
                          <span>
                            {{ item.place }}
                          </span>
                        </span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
          <v-tabs-window-item value="1">
            <v-card class="overflow-y-auto card-no-bg" max-height="60vh">
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    sm="12"
                    v-for="(item, i) in education"
                    :key="i"
                  >
                    <v-card flat class="card_border" height="100%">
                      <v-card-title>
                        <span class="general-info-card-title">
                          {{ item.from_date
                          }}{{ item.to_date ? ` - ${item.to_date}` : "" }}
                        </span>
                      </v-card-title>
                      <v-card-text>
                        <p class="general-info-card-text">{{ item.degree }}</p>
                        <span class="card-text-footer">
                          <span style="color: var(--neon-color)">
                            &bull;&nbsp;
                          </span>
                          <span>
                            {{ item.place }}
                          </span>
                        </span>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
          <v-tabs-window-item value="2">
            <v-card class="overflow-y-auto card-no-bg" max-height="60vh">
              <v-card-text>
                <v-row>
                  <v-col
                    cols="4"
                    lg="3"
                    md="3"
                    sm="4"
                    xs="4"
                    v-for="(item, i) in skills"
                    :key="i"
                    class="d-flex align-center justify-center"
                  >
                    <v-card
                      flat
                      style="background-color: var(--card-logo)"
                      :width="store.state.isMobile ? '17vw' : '100px'"
                      :height="store.state.isMobile ? '17vw' : '100px'"
                      class="d-flex align-center justify-center"
                    >
                      <v-card-text class="d-flex align-center justify-center">
                        <v-img
                          v-if="item.url"
                          width="50%"
                          :src="item.url"
                        ></v-img>
                        <v-icon
                          v-if="item.icon"
                          :style="
                            store.state.isMobile
                              ? 'font-size: 300%'
                              : 'font-size: 500%'
                          "
                          >{{ item.icon }}</v-icon
                        >
                      </v-card-text>
                      <v-tooltip activator="parent" location="bottom">{{
                        item.name
                      }}</v-tooltip>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
          <v-tabs-window-item
            value="3"
            :style="store.state.isMobile ? `margin-top: 2rem` : ''"
          >
            <v-row>
              <v-col
                v-for="(item, i) in store.data.me"
                :key="i"
                cols="12"
                lg="6"
                md="6"
              >
                <span class="card-text-footer">
                  {{ item.type }}
                </span>
                &nbsp;{{ item.value }}
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
import { parsePayload } from "~/node_modules/nuxt/dist/app/composables/payload";
export default {
  data() {
    return {
      store: storeToRefs(useStore()),
      storeMethod: useStore(),
      isMobile: false,
      tab: 0,

      // Các phần này sẽ làm mục chi tiết, các khóa học,...
      experience: [
        {
          from_date: "2024",
          to_date: "Present",
          place: "Saigon Health Care",
          position: "Web Developer, API Integration",
        },
        {
          from_date: "2023",
          to_date: "2024",
          place: "TFB",
          position: "Web Developer, Data Engineer",
        },
        {
          from_date: "2022",
          to_date: "2023",
          place: "Safiwis",
          position: "Web Developer",
        },
      ],

      education: [
        {
          from_date: "2018",
          to_date: "2023",
          place: "Thuy Loi University",
          degree: "Information Technology Engineer",
        },
        {
          from_date: "2018",
          to_date: "2023",
          place: "Youtube",
          degree: "Fullstack Web Development",
        },
      ],
      skills: [
        // frontend
        {
          name: "HTML",
          icon: "mdi-language-html5",
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
        },
        {
          name: "JavaScript",
          icon: "mdi-language-javascript",
        },
        {
          name: "Vue.js",
          icon: "mdi-vuejs",
        },
        {
          name: "Nuxt.js",
          icon: "mdi-nuxt",
        },
        {
          name: "Vuetify",
          icon: "mdi-vuetify",
        },
        {
          name: "Ant Design Vue",
          url: "https://camo.githubusercontent.com/7c30e845c98884c9cb1cb789b1d0d155426faa659ea47aa143668f7f74d61c1a/68747470733a2f2f616c6979756e63646e2e616e7464762e636f6d2f6c6f676f2e706e67",
        },
        {
          name: "Figma",
          url: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
        },

        // Backend
        {
          name: "Node.js",
          icon: "mdi-nodejs",
        },
        {
          name: "Hasura",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hasura-icon-primary.png",
        },
        {
          name: "PostgreSQL",
          url: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
        },
        {
          name: "GraphQL",
          icon: "mdi-graphql",
        },
        {
          name: "MSSQL Server",
          url: "https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png",
        },
        {
          name: "PhpMyAdmin",
          url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phpmyadmin-icon.png",
        },

        // other
        {
          name: "Github",
          icon: "mdi-github",
        },
        {
          name: "Python",
          icon: "mdi-language-python",
        },
        {
          name: "WordPress",
          icon: "mdi-wordpress",
        },
        {
          name: "Flutter",
          url: "https://static-00.iconduck.com/assets.00/flutter-icon-1651x2048-ojswpayr.png",
        },
        {
          name: "Dart",
          url: "https://static-00.iconduck.com/assets.00/dart-icon-2042x2048-775u9j9x.png",
        },
        {
          name: "PHP",
          icon: "mdi-language-php",
        },
      ],
      resumes: [
        {
          title: "Experience",
          content: "Work in Safiwis",
          from_date: "2022-07-01",
          icon: "mdi-leaf",
        },
        {
          title: "Education",
          content: "Work in Safiwis",
          from_date: "2022-07-01",
          icon: "mdi-book-education",
        },
        {
          title: "Skills",
          content: "Work in TFB",
          from_date: "2023-07-01",
          icon: "mdi-lead-pencil",
        },
        {
          title: "About me",
          content: "Work in TFB",
          from_date: "2023-07-01",
          icon: "mdi-account",
        },
      ],
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice);
  },
  watch: {},
  methods: {
    checkDevice() {
      this.store.state.isMobile = window.innerWidth <= 768; // Kích thước <= 768px là màn hình nhỏ
    },
  },
};
</script>

<style scoped>
.custom-icon {
  width: 50px;
  height: 50px; /* Kích thước icon bằng 50% chiều rộng của card */
  font-size: inherit; /* Giữ kích thước phụ thuộc vào card */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>