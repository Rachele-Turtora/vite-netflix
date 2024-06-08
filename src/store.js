import { reactive } from "vue";

export const store = reactive({
    apiKey: "d30fea0c1c45289d0465194d20b27651",
    movieResults: [],
    tvResults: [],
    searchKey: "",
    apiInfo: {
        apiUrl: "https://api.themoviedb.org/3/search/",
        endpoints: {
            movie: "movie",
            tv: "tv"
        }
    },
    srcImg: "https://image.tmdb.org/t/p/",
    loading: false,
    endSearch: false
})

