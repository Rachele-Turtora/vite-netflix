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
      store,
      lang: {
        en: "en",
        it: "it",
        es: "es",
        ja: "ja"
      }
    }
  },

  methods: {
    searchFilm() {

      const params = {
        api_key: this.store.apiKey
      }

      if (this.store.searchKey) {
        params.query = this.store.searchKey;
      }

      axios.get(this.store.apiUrl, { params })
        .then(response => {
          this.store.movieResults = response.data.results;
        })
    }
  },

  created() {
    this.searchFilm()
  }
}
</script>

<template>
  <h1>Boolflix</h1>
  <SearchComponent @search="searchFilm" />
  <ul>
    <li v-for="result in store.movieResults">
      <p>{{ result.title }}</p>
      <p>{{ result.original_title }}</p>
      <img v-if="result.original_language == lang.en" src="/img/england_flag.png" :alt="result.original_language">
      <img v-else-if="result.original_language == lang.it" src="/img/italy_flag.png" :alt="result.original_language">
      <img v-else-if="result.original_language == lang.es" src="/img/spain_flag.png" :alt="result.original_language">
      <img v-else-if="result.original_language == lang.ja" src="/img/japan_flag.png" :alt="result.original_language">
      <p v-else>{{ result.original_language }}</p>
      <p>{{ result.vote_average }}</p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  width: calc(25% - 40px);
  margin: 20px;
  border: 1px solid black;
  padding-left: 5px;
}

p {
  padding: 5px 0;
}

img {
  width: 50px;
  height: 50px;
}
</style>
