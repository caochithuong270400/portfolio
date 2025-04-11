<template>
  <v-container class="d-flex align-center justify-center">
    <v-row>
      <v-col
        v-for="(item, i) in services"
        :key="i"
        cols="12"
        lg="6"
        md="6"
        sm="12"
      >
        <v-card
          height="100%"
          width="auto"
          class="card-blur card-d-none card_border"
        >
          <v-card-title> </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col>
                <div>
                  <span class="large-text text-with-border">#{{ i + 1 }}</span>
                </div>
              </v-col>
              <v-col class="d-flex align-center justify-end mr-2">
                <v-btn
                  icon="mdi-arrow-bottom-right"
                  style="
                    background-color: var(--font-border);
                    color: var(--font-color);
                  "
                >
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div>
                  <span class="middle-text">{{ item.title }}</span>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                {{ item.content }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Web Developer",
          content:
            "We are a web developer with the excellent experience with over three years in this field",
        },
        {
          title: "API Integration",
          content:
            "We have experience in process data from different database of hospitals",
        },
        {
          title: "Database Administration",
          content:
            "We have experience in process data from different database of hospitals",
        },
        {
          title: "Data Engineer",
          content:
            "We have experience in process data from different database of hospitals",
        },
        {
          title: "Backend Developer",
          content:
            "We have experience in process data from different database of hospitals",
        },
        {
          title: "Web Designer",
          content:
            "We have experience in process data from different database of hospitals",
        },
      ],
    };
  },
};
</script>

<style>
</style>