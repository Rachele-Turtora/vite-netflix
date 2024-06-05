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
      langs: {
        en: ["en", "england"],
        it: ["it", "italy"],
        es: ["es", "spain"],
        ja: ["ja", "japan"],
        fr: ["fr", "france"],
        de: ["de", "germany"]
      }
    }
  },

  methods: {

    findLang(language) {
      for (let key in this.langs) {
        if (this.langs[key][0] === language) {
          return this.langs[key];
        }
      }
    },

    search() {

      const params = {
        api_key: this.store.apiKey
      }

      if (this.store.searchKey) {
        params.query = this.store.searchKey;
      }

      this.apiCall(this.store.apiUrlMovie, params, "movieResults");
      this.apiCall(this.store.apiUrlTv, params, "tvResults");
    },

    apiCall(url, params, results) {
      axios.get(url, { params })
        .then(response => {
          this.store[results] = response.data.results;
        })
    }
  },

  created() {
    this.search()
  }
}
</script>

<template>
  <h1>Boolflix</h1>
  <SearchComponent @search="search" />

  <div class="container" v-show="store.movieResults.length">
    <h2>Movies</h2>
    <ul>
      <li v-for="result in store.movieResults">
        <p>{{ result.title }}</p>
        <p>{{ result.original_title }}</p>
        <div>
          <img v-if="findLang(result.original_language)" :src="`/img/${findLang(result.original_language)[1]}_flag.png`"
            :alt="result.original_language">
          <p v-else>{{ result.original_language }}</p>
        </div>
        <p>{{ result.vote_average }}</p>
      </li>
    </ul>
  </div>

  <div class="container" v-show="store.tvResults.length">
    <h2>Tv series</h2>
    <ul>
      <li v-for="result in store.tvResults">
        <p>{{ result.name }}</p>
        <p>{{ result.original_name }}</p>
        <div>
          <img v-if="findLang(result.original_language)" :src="`/img/${findLang(result.original_language)[1]}_flag.png`"
            :alt="result.original_language">
          <p v-else>{{ result.original_language }}</p>
        </div>
        <p>{{ result.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  width: calc(25% - 40px);
  margin: 20px 15px 20px 0;
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

.container {
  margin: 30px 20px;
}
</style>
