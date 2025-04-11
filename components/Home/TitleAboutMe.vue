<template>
  <v-container fill-height class="d-flex">
    <v-card
      :theme="store.state.theme"
      class="pa-2 d-flex align-center justify-center fill-remaining"
      style="background-color: #ffffff00; box-shadow: none"
    >
      <v-card-text class="fill-remaining">
        <v-row class="d-flex align-center justify-center fill-remaining">
          <v-col cols="12" md="6" sm="12">
            <h3>Hi, It's Gnou, I'm</h3>
            <h3>
              <span style="--i: 0" data-text="Web Developer."
                >Web Developer.</span
              >
              <span style="--i: 1" data-text="UX/UI Designer."
                >UX/UI Designer.</span
              >
              <span style="--i: 2" data-text="Coding Instructor."
                >Coding Instructor.</span
              >
              &nbsp;
            </h3>
            <p style="font-size: 16px; line-height: 1.8">
              <span>
                I'm a web Developer with extensive experience over 3 years,
                expertise to build, design website, and many more...
              </span>
            </p>
            <br />
            <v-row>
              <v-col cols="auto" lg="6" sm="12">
                <v-btn
                  rounded
                  variant="outlined"
                  append-icon="mdi-progress-download"
                >
                  Download CV
                </v-btn>
              </v-col>
              <v-col cols="auto" lg="6" sm="12">
                <v-row>
                  <v-col cols="12">
                    <v-btn
                      icon
                      size="x-small"
                      variant="outlined"
                      style="margin: 0 7px"
                    >
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      size="x-small"
                      variant="outlined"
                      style="margin: 0 7px"
                    >
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      size="x-small"
                      variant="outlined"
                      style="margin: 0 7px"
                    >
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      size="x-small"
                      variant="outlined"
                      style="margin: 0 7px"
                      href="https://web.facebook.com/chithuong.cao.16"
                      target="_blank"
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            v-if="!isMobile"
            cols="12"
            md="6"
            sm="12"
            class="d-flex align-center justify-center"
          >
            <v-row>
              <v-col style="justify-items: end">
                <!-- img 1 -->
                <v-img
                  v-if="store.state.theme === 'dark'"
                  src="https://firebasestorage.googleapis.com/v0/b/dev-t-ef558.appspot.com/o/portfolio%2Fok-boai.png?alt=media&token=57d3bf59-15b4-4870-a7b7-1835bb062688"
                  alt="Chithuong Cao"
                  width="25vw"
                />

                <!-- img 2 -->
                <v-img
                  v-if="store.state.theme === 'light'"
                  src="https://firebasestorage.googleapis.com/v0/b/dev-t-ef558.appspot.com/o/portfolio%2FAnime-Profile-Pictures.png?alt=media&token=36eb9a4b-5c4e-4bcf-8bdd-513240e891f3"
                  alt="Chithuong Cao"
                  width="25vw"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            v-if="isMobile"
            cols="12"
            class="d-flex align-center justify-center"
          >
            <!-- img 1 -->
            <v-img
              v-if="store.state.theme === 'dark'"
              src="https://firebasestorage.googleapis.com/v0/b/dev-t-ef558.appspot.com/o/portfolio%2Fok-boai.png?alt=media&token=57d3bf59-15b4-4870-a7b7-1835bb062688"
              alt="Chithuong Cao"
              width="60vw"
            />

            <!-- img 2 -->
            <v-img
              v-if="store.state.theme === 'light'"
              src="https://firebasestorage.googleapis.com/v0/b/dev-t-ef558.appspot.com/o/portfolio%2FAnime-Profile-Pictures.png?alt=media&token=36eb9a4b-5c4e-4bcf-8bdd-513240e891f3"
              alt="Chithuong Cao"
              width="60vw"
            >
            </v-img>
          </v-col>

          <v-col
            cols="12"
            md="4"
            sm="12"
            class="d-flex align-center justify-center"
          >
            <v-row>
              <v-col cols="auto"><span class="large-text">3</span></v-col>
              <v-col cols="6" class="d-flex align-center justify-center">
                <span class="middle-text">Years of experience</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="12"
            class="d-flex align-center justify-center"
          >
            <v-row>
              <v-col cols="auto"><span class="large-text">7</span></v-col>
              <v-col cols="6" class="d-flex align-center justify-center">
                <span class="middle-text">Projects completed</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="4"
            sm="12"
            class="d-flex align-center justify-center"
          >
            <v-row>
              <v-col cols="auto"><span class="large-text">6</span></v-col>
              <v-col cols="6" class="d-flex align-center justify-center">
                <span class="middle-text">Technologies mastered</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Vùng chiếm phần còn lại -->
        <v-row> </v-row>
      </v-card-text>
    </v-card>
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

      isMobile: false,
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth <= 768; // Kích thước <= 768px là màn hình nhỏ
      console.log("Is Mobile:", this.isMobile);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* .large-text {
  font-size: 65px;
  font-weight: bold;
} */

/* .middle-text {
  font-size: 20px;
  font-weight: bold;
} */

.fill-remaining {
  height: 100%;
}

.remaining-area {
  background-color: #df6161; /* Tùy chỉnh màu nền để phân biệt */
  height: 100%;
}

#text {
  /* position: relative; */
  font-weight: 100;
  font-size: 1.5em;
  cursor: default;
  /* white-space: nowrap; */
  min-height: 100vh;
  overflow: hidden;
  /* background: #333; */
}
h3 {
  padding: 0 0;
}
h3 span {
  position: relative;
  color: rgba(145, 145, 145, 0);
  animation: displayText 9s infinite;
  animation-delay: calc(-3s * var(--i));
}

@keyframes displayText {
  0% {
    display: inline-block;
  }
  33.33%,
  100% {
    display: none;
  }
}
h3 span::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--neon-color);
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid var(--neon-color);
  filter: drop-shadow(0 0 5px var(--neon-color))
    drop-shadow(0 0 25px var(--neon-color));
  animation: animate 3s linear infinite;
}
@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }
  70%,
  90% {
    width: 105%;
  }
}
</style>