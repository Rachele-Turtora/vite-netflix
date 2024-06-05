import { reactive } from "vue";

export const store = reactive({
    apiKey: "d30fea0c1c45289d0465194d20b27651",
    movieResults: [],
    tvResults: [],
    searchKey: "",
    apiUrl: "https://api.themoviedb.org/3/search/movie"
})

