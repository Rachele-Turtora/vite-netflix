<script>
import { store } from "./store";
import axios from "axios";

import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "MyApp",
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },

  methods: {

    search() {

      if (this.store.searchKey.length !== 0) {
        this.store.loading = true;

        const params = {
          api_key: this.store.apiKey
        }

        if (this.store.searchKey) {
          params.query = this.store.searchKey;
        }

        const movieUrl = this.store.apiInfo.apiSearchUrl + this.store.apiInfo.searchEndpoints.movie;
        const tvUrl = this.store.apiInfo.apiSearchUrl + this.store.apiInfo.searchEndpoints.tv;

        this.apiCall(movieUrl, params, "movieResults");
        this.apiCall(tvUrl, params, "tvResults");
      }
    },

    apiCall(url, params, results) {
      axios.get(url, { params })
        .then(response => {
          this.store[results] = response.data.results;
          this.store.loading = false;
          this.store.endSearch = true;
        })
    }
  }
}
</script>

<template>
  <HeaderComponent @search="search()" />
  <div v-if="this.store.loading">
    <p>Caricamento in corso...</p>
  </div>
  <div class="main-container" v-else>
    <MainComponent />
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 80px;
}
</style>
