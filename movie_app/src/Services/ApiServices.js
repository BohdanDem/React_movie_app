import axios from "axios";
import {baseURL, EndPoints} from "../API/EndPoints";

const tokenOptions = axios.create({
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjQyM2Q4ODcyM2VkMWQyODc2NjliMzdhMmZiZTEyNCIsInN1YiI6IjY0YzI2MDJkMTNhMzIwMDBmZmJmNDU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8Yn8RofgSqB6DVnlJF1FlnKgBjelvEeiddf2DaN-vo'
    }
});

export const GetMoviesListCards = {
    getMoviesListCards: async (setMoviesListCards, setMovieInfoFirstId) => {
        let response = await tokenOptions.get(baseURL + EndPoints.movies)
        setMoviesListCards(response.data.results)
        setMovieInfoFirstId(response.data.results[0].id);
    }
}

export const GetMovieInfo = {
    getMovieInfo: async (setMovieInfo, id) => {
        let response = await tokenOptions.get(baseURL + EndPoints.movieInfo + id)
        setMovieInfo(response.data);
    }
}

export const GetMovieDetails = {
    getMovieDetails: async (setMovieDetails, id) => {
        let response = await tokenOptions.get(baseURL + EndPoints.movieInfo + id)
        setMovieDetails(response.data);
    }
}