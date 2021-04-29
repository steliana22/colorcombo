<template>
  <v-app>
    <v-app-bar app color="orange darken-2" dark>
      <div class="d-flex align-center justify-center">
        <h1 class="mx-auto">The ColorCombo</h1>
      </div>
    </v-app-bar>

    <!-- Main -->
    <v-main>
      <Main />
    </v-main>

    <!-- Footer -->
    <v-footer padless>
      <v-col
        class="text-center orange darken-2 white--text"
        cols="12"
        dark
      >
        {{ new Date().getFullYear() }} — <strong>Made with love for Frontify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: antiquewhite;
}
</style>
