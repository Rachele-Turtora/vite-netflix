<script>
import { store } from "./store";
import axios from "axios";

import HeaderComponent from "./components/HeaderComponent.vue";
import SearchComponent from './components/SearchComponent.vue';
import CardsComponent from "./components/CardsComponent.vue";

export default {
  name: "MyApp",
  components: {
    HeaderComponent,
    SearchComponent,
    CardsComponent,
  },

  data() {
    return {
      store,
      imgWidth: "w154"
    }
  },

  computed: {
    image() {
      return store.srcImg + this.imgWidth
    }
  },

  methods: {

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
  <HeaderComponent />
  <SearchComponent @search="search" />
  <div class="container" v-show="store.movieResults.length">
    <h2>Movies</h2>
    <ul>
      <CardsComponent v-for="result in store.movieResults" :key="result.id" :img="`${image}${result.poster_path}`"
        :title="result.title" :original_title="result.original_title" :language="result.original_language"
        :vote="result.vote_average" :overview="result.overview" />
    </ul>
  </div>
  <div class="container" v-show="store.tvResults.length">
    <h2>Tv series</h2>
    <ul>
      <CardsComponent v-for="result in store.tvResults" :key="result.id" :img="`${image}${result.poster_path}`"
        :title="result.name" :original_title="result.original_name" :language="result.original_language"
        :vote="result.vote_average" :overview="result.overview" />
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin: 30px 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
