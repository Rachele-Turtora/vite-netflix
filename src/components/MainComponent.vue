<script>
import axios from "axios";
import { store } from "../store";

import CardsComponent from "./CardsComponent.vue";

export default {
    name: "MainComponent",
    components: {
        CardsComponent
    },

    data() {
        return {
            store,
            imgWidth: "w185"
        }
    },

    computed: {
        image() {
            return store.srcImg + this.imgWidth
        },
        filteredMovie() {
            return store.movieResults.filter(result => result.poster_path)
        },
        filteredTv() {
            return store.tvResults.filter(result => result.poster_path)
        }
    },

    methods: {
        selectGenre() {

            const params = {
                api_key: this.store.apiKey
            }
            const moviesGenre = this.store.apiInfo.apiGenreUrl + this.store.apiInfo.genreEndpoints.movie;
            const tvGenre = this.store.apiInfo.apiGenreUrl + this.store.apiInfo.genreEndpoints.tv;

            this.apiCall(moviesGenre, params, "movieGenres");
            this.apiCall(tvGenre, params, "tvGenres");
        },

        apiCall(url, params, genres) {
            axios.get(url, { params }, genres).then(response => {
                this.store[genres] = response.data.genres
                console.log(response.data.genres.length)
            })
        }
    }
}
</script>

<template>
    <div class="container" v-show="store.endSearch">
        <div class="genres">
            <h2>Movies</h2>
            <select class="form-select" @click="selectGenre()" aria-label="Default select example">
                <option selected>Generi</option>
                <option v-for="genre in store.movieGenres" :value="genre.name"> {{ genre.name }} </option>
            </select>
        </div>
        <ul v-if="store.movieResults.length">
            <CardsComponent v-for="result in filteredMovie" :key="result.id" :img="`${image}${result.poster_path}`"
                :title="result.title" :original_title="result.original_title" :language="result.original_language"
                :vote="result.vote_average" :overview="result.overview" />
        </ul>
        <p v-else>No results found</p>
    </div>
    <div class="container" v-show="store.endSearch">
        <div class="genres">
            <h2>Tv series</h2>
            <select class="form-select" @click="selectGenre()" aria-label="Default select example">
                <option selected>Generi</option>
                <option v-for="genre in store.tvGenres" :value="genre.name"> {{ genre.name }} </option>
            </select>
        </div>
        <ul v-if="store.tvResults.length">
            <CardsComponent v-for="result in filteredTv" :key="result.id" :img="`${image}${result.poster_path}`"
                :title="result.name" :original_title="result.original_name" :language="result.original_language"
                :vote="result.vote_average" :overview="result.overview" />
        </ul>
        <p v-else>No results found</p>
    </div>
</template>

<style>
.container {
    padding: 30px 20px;
}

h2,
p {
    color: white;
    margin-bottom: 20px;
}


.genres {
    display: flex;
}

select {
    margin-left: 20px;
    width: 120px;
    height: 30px;
}

ul {
    display: flex;
    overflow-x: auto;
}
</style>