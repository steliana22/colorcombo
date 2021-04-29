<template>
  <v-container fill-height>
    
    <v-row class="text-center">

      <!-- Color interaction -->
      <v-col cols="12" sm="6">

        <v-row justify="center" class="orange lighten-4 pa-6 ma-5 rounded-xl">

          <h2 class="headline font-weight-light ma-4 deep-orange--text">
            Interact with the color collection below
          </h2>

          <!-- Add a new color -->
          <v-btn block color="green white--text" @click="dialogAddColor = true" class="ma-5">
            Add a new color
          </v-btn>

          <v-dialog v-model="dialogAddColor" max-width="400">

            <v-card elevation="10" class="pa-4">

              <v-card-title class="font-weight-light">
                Add a new color to the collection
              </v-card-title>

              <v-text-field label="Color name" v-model="newColorName" hide-details="auto" color="orange" clearable>
              </v-text-field>

              <v-text-field label="Hex value" v-model="newHexValue" hide-details="auto" color="orange" clearable>
              </v-text-field>

              <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn color="orange darken-1" text @click="dialogAddColor = false">
                  Cancel
                </v-btn>

                <v-btn color="green darken-1" text @click="addColor(newColorName, newHexValue);dialogAddColor = false;">
                  Add color
                </v-btn>

              </v-card-actions>

            </v-card>

          </v-dialog>

          <!-- Delete a color -->
          <v-btn block color="red white--text" @click="dialogDeleteColor = true" class="ma-5">
            Delete a color
          </v-btn>

          <v-dialog v-model="dialogDeleteColor" max-width="400">

            <v-card elevation="10" class="pa-4">

              <v-card-title class="font-weight-light">
                Please select a color to be deleted:
              </v-card-title>

              <v-select v-model="colorToDelete" :items="colors" item-text="name" item-value="_id" label="Pick a color" color="orange"></v-select>

              <v-card-actions>

                <v-spacer></v-spacer>

                <v-btn color="orange darken-1" text @click="dialogDeleteColor = false">
                  Cancel
                </v-btn>

                <v-btn color="red darken-1" text @click="deleteColor(colorToDelete);dialogDeleteColor = false;">
                  Delete color
                </v-btn>

              </v-card-actions>

            </v-card>

          </v-dialog>

        </v-row>

      </v-col>

      <!-- Color list -->
      <v-col cols="12" sm="6">

        <v-row justify="center" class="ma-5">

          <div v-for="(col, i) in colors" :key="i" class="d-flex flex-column justify-center align-center ma-3" :style="{ color: col.hex }">

            <v-avatar :color="col.hex" size="50" class="mb-2 mt-4">
            </v-avatar>

            {{ col.name }}

          </div>

        </v-row>

      </v-col>

    </v-row>

  </v-container>

</template>

<script>
export default {
  name: "Main",

  data: () => ({
    colors: [],
    dialogAddColor: false,
    dialogDeleteColor: false,
    newColorName: "",
    newHexValue: "",
    colorToDelete: null,
  }),

  computed: {},

  methods: {
    getColors() {
      this.axios
        .get("http://localhost:3000/api/colors")
        .then((response) => (this.colors = response.data.data));
    },
    addColor(n, h) {
      this.axios.post(`http://localhost:3000/api/colors`, {
        name: n,
        hex: h,
      });
      this.getColors();
      this.resetNewColors();
    },
    deleteColor(v) {
      this.axios
        .delete(`http://localhost:3000/api/colors/` + v)
        .then((response) => {
          if (response.status === 200) {
            this.getColors();
          }
        });
    },
    resetNewColors() {
      this.newColorName = "";
      this.newHexValue = "";
    },
  },

  created() {
    this.getColors();
  },
};
</script>

<style scoped>
.colorsList {
  font-size: 25px;
}
</style>
