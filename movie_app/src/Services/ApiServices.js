import axios from "axios";
import {baseURL, EndPoints} from "../API/EndPoints";

const tokenOptions = axios.create({
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjQyM2Q4ODcyM2VkMWQyODc2NjliMzdhMmZiZTEyNCIsInN1YiI6IjY0YzI2MDJkMTNhMzIwMDBmZmJmNDU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8Yn8RofgSqB6DVnlJF1FlnKgBjelvEeiddf2DaN-vo'
    }
});

export const GetMoviesListCards = {
    getMoviesListCards: async (setMoviesListCards, setMovieInfoFirstId) => {
        try {
            let response = await tokenOptions.get(baseURL + EndPoints.movies)
            setMoviesListCards(response.data.results)
            setMovieInfoFirstId(response.data.results[0].id);
        } catch(err) {
        }
    }
}

export const GetMovieInfo = {
    getMovieInfo: async (setMovieInfo, id) => {
        try {
            let response = await tokenOptions.get(baseURL + EndPoints.movieInfo + id)
            setMovieInfo(response.data);
        } catch(err) {
        }
    }
}

export const GetMovieDetails = {
    getMovieDetails: async (setMovieDetails, id) => {
        try {
            let response = await tokenOptions.get(baseURL + EndPoints.movieInfo + id)
            setMovieDetails(response.data);
        }catch(err) {
        }
    }
}