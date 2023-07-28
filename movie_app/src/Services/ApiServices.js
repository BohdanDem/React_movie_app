import axios from "axios";
import {baseURL, EndPoints} from "../API/EndPoints";

const tokenOptions = axios.create({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjQyM2Q4ODcyM2VkMWQyODc2NjliMzdhMmZiZTEyNCIsInN1YiI6IjY0YzI2MDJkMTNhMzIwMDBmZmJmNDU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8Yn8RofgSqB6DVnlJF1FlnKgBjelvEeiddf2DaN-vo'
    },
    params: {
        api_key: '1b423d88723ed1d287669b37a2fbe124'
    }
});

export const GetMoviesListCards = {
    getMoviesListCards: async (setMoviesListCards) => {
        let response = await tokenOptions.get(baseURL + EndPoints.movies)
        setMoviesListCards(response.data.results);
    }
}