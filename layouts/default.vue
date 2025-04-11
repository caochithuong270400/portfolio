<template>
  <v-layout class="rounded rounded-md layout-style" style="position: relative">
    <!-- head -->
    <transition name="fade">
      <v-app-bar
        v-if="store.state.app_bar"
        density="compact"
        class="app-bar-style"
        permanent
        fixed
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon
            v-if="store.state.isMobile"
            @click="lookNavigationLeft()"
          ></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title v-if="!store.state.isMobile">
          <v-tabs
            align-tabs="end"
            bg-color="#ffffff00"
            slider-color="teal-lighten-3"
            show-arrows
            class="bg-trsp"
            stacked
          >
            <v-tab
              v-for="(item, i) in toolbar_items"
              :key="i"
              :text="item.title"
              :value="item.id"
              :to="item.path"
            ></v-tab>
          </v-tabs>
        </v-app-bar-title>

        <template v-slot:append>
          <v-switch
            v-if="!store.state.isMobile"
            false-icon="mdi-weather-sunny"
            true-icon="mdi-weather-night"
            v-model="store.state.theme"
            color="gray"
            false-value="light"
            true-value="dark"
            hide-details
          ></v-switch>
          <!-- <v-btn
            icon="mdi-apps"
            @click="navidation_right = !navidation_right"
          ></v-btn> -->
        </template>
      </v-app-bar>
    </transition>

    <!-- nav 1 -->
    <v-navigation-drawer
      :style="`display: ${store.state.isMobile ? 'block' : 'none'};`"
      v-model="navidation_left_1"
      :theme="store.state.theme"
      class="nav-style"
    >
      <!-- <v-list-item nav>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="navidation_left_2 = !navidation_left_2"
        ></v-btn>
      </v-list-item> -->
      <v-list density="compact" nav>
        <span v-for="(item, i) in n1s" :key="i">
          <!-- <v-list-item
            :prepend-icon="item.mdi"
            :value="item.hint"
            @click="
              navidation_left_2 = true;
              n1_id = item.id;
            "
          > -->
          <v-list-item
            v-if="item.id !== 2 && item.type !== 'expand'"
            :prepend-icon="item.mdi"
            :value="item.hint"
          >
          </v-list-item>

          <v-list-group
            v-else-if="item.id !== 2 && item.type === 'expand'"
            prepend-icon="mdi-folder"
            append-icon="mdi-chevron-down"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-account-circle"
                title="Table of contents"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="(child, index) in toolbar_items"
              :key="index"
              :to="child.path"
            >
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else-if="item.id === 2"
            :prepend-icon="item.mdi"
            :value="item.hint"
          >
            <v-switch
              false-icon="mdi-weather-sunny"
              true-icon="mdi-weather-night"
              v-model="store.state.theme"
              color="gray"
              :label="`${store.state.theme}`"
              false-value="light"
              true-value="dark"
              hide-details
            ></v-switch>
          </v-list-item>
        </span>
      </v-list>
    </v-navigation-drawer>

    <v-main height="100%">
      <slot />
    </v-main>
  </v-layout>
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "~/store";
export default {
  data() {
    return {
      isMobile: false,
      isLoading: true, // Trạng thái màn hình chờ

      store: storeToRefs(useStore()),
      storeMethod: useStore(),

      showCard: true,

      toolbar_items: [
        {
          id: "home",
          title: "Home",
          mdi: "mdi-home",
          hint: "home",
          path: "/",
        },
        {
          id: "services",
          title: "Service",
          mdi: "mdi-home",
          hint: "services",
          path: "/services",
        },
        {
          id: "resume",
          title: "Resume",
          mdi: "mdi-home",
          hint: "resume",
          path: "/resume",
        },
        {
          id: "work",
          title: "Work",
          mdi: "mdi-home",
          hint: "work",
          path: "/work",
        },
        {
          id: "contact",
          title: "Contact",
          mdi: "mdi-home",
          hint: "contact",
          path: "/",
        },
        {
          id: "hire",
          title: "Hire me",
          mdi: "mdi-home",
          hint: "hire",
          path: "/",
        },
      ], // tiêu đề layout
      navidation_right: false,
      navidation_left_1: false,
      navidation_left_2: false,
      n1s: [
        {
          id: 1,
          mdi: "mdi-forum",
          hint: "contact",
          type: "expand",
        },
        {
          id: 2,
          mdi: "mdi-view-dashboard",
          hint: "mode",
          type: "normal",
        },
      ],
      n1_id: 1,
      n2s: [
        {
          id: 1,
          n1_id: 1,
          mdi: "mdi-email",
          text: "Inbox",
        },
        {
          id: 2,
          n1_id: 1,
          mdi: "mdi-account-supervisor-circle",
          text: "Inbox",
        },
        {
          id: 3,
          n1_id: 2,
          mdi: "mdi-clock-start",
          text: "Inbox",
        },
        {
          id: 4,
          n1_id: 2,
          mdi: "",
          text: "Theme",
          action: "theme",
        },
      ],
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice());

    this.storeMethod.changeTheme();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice());
  },
  watch: {
    "store.state.isMobile"(newVal, oldVal) {
      this.navidation_left_1 = false;
      console.log("changed mobile!", this.store.state.isMobile);
      // if (this.store.state.isMobile) {
      //   this.store.state.isChangeToMobileFromDesktop = true;
      // }
    },
    "store.state.theme"(newVal, oldVal) {
      this.storeMethod.changeTheme();
    },
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth < 768;
    },
    toggleCard() {
      this.showCard = !this.showCard;
    },
    lookNavigationLeft() {
      if (this.store.state.isMobile) {
        this.navidation_left_1 = !this.navidation_left_1;
        // if (this.navidation_left_1 === false) {
        //   this.navidation_left_2 = false;
        // }
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active trong phiên bản <2.1.8 */ {
  opacity: 0;
}
.nav-style {
  background-color: var(--nav-bg-color);
  border: none;
}
.layout-style {
  background-color: rgba(255, 255, 255, 0);
}
.app-bar-style {
  position: fixed !important;
  background-color: rgba(10, 10, 10, 0);
  border: none;
  box-shadow: none !important;
}
/* #light {
  position: absolute;
  transform: translate(0%, 0%);
  width: 50px;
  height: 50px;
  background: var(--light-point-mouse);
  border-radius: 50%;
  box-shadow: 0 0 15px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff,
    0 0 300px #fff;
} */
.bg-trsp {
  background-color: rgba(255, 255, 255, 0);
}
</style>