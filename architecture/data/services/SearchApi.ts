import axios from "axios";

export const SearchApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie",
    params: {
        api_key: "e2080ea7ee8946c90e28b290d79d3fbf",
        language: "es-ES"
    }
})

export default SearchApi