<script>
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
        }
    }
}
</script>

<template>
    <div class="container" v-show="store.endSearch">
        <h2>Movies</h2>
        <ul v-if="store.movieResults.length">
            <CardsComponent v-for="result in store.movieResults" :key="result.id" :img="`${image}${result.poster_path}`"
                :title="result.title" :original_title="result.original_title" :language="result.original_language"
                :vote="result.vote_average" :overview="result.overview" />
        </ul>
        <p v-else>No results found</p>
    </div>
    <div class="container" v-show="store.endSearch">
        <h2>Tv series</h2>
        <ul v-if="store.tvResults.length">
            <CardsComponent v-for="result in store.tvResults" :key="result.id" :img="`${image}${result.poster_path}`"
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
}

ul {
    display: flex;
    overflow-x: auto;
}
</style>