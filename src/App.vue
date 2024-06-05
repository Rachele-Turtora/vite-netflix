<script>
import { store } from "./store";
import axios from "axios";

import SearchComponent from './components/SearchComponent.vue';

export default {
  name: "MyApp",
  components: {
    SearchComponent
  },

  data() {
    return {
      store
    }
  },

  created() {
    axios.get(this.store.apiUrl, {
      params: { api_key: this.store.apiKey }
    }).then(response => {
      this.store.results = response.results;
      console.log("Ho fatto la chiamata API")
    })
  }
}
</script>

<template>
  <h1>Boolflix</h1>
  <SearchComponent />
</template>

<style scoped></style>
