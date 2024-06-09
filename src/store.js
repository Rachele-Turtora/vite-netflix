import { reactive } from "vue";

export const store = reactive({
    apiKey: "d30fea0c1c45289d0465194d20b27651",
    movieResults: [],
    tvResults: [],
    movieGenres: [],
    tvGenres: [],
    movieGenreSelected: "",
    tvGenreSelected: "",
    searchKey: "",
    apiInfo: {
        apiSearchUrl: "https://api.themoviedb.org/3/search/",
        searchEndpoints: {
            movie: "movie",
            tv: "tv"
        },
        apiGenreUrl: "https://api.themoviedb.org/3/genre/",
        genreEndpoints: {
            movie: "movie/list",
            tv: "tv/list"
        }
    },
    srcImg: "https://image.tmdb.org/t/p/",
    loading: false,
    endSearch: false,
    displayInput: false
})

