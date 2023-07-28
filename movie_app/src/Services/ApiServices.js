import axios from "axios";
import {baseURL, EndPoints, posterURL} from "../API/EndPoints";

const tokenOptions = axios.create({
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjQyM2Q4ODcyM2VkMWQyODc2NjliMzdhMmZiZTEyNCIsInN1YiI6IjY0YzI2MDJkMTNhMzIwMDBmZmJmNDU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w8Yn8RofgSqB6DVnlJF1FlnKgBjelvEeiddf2DaN-vo'
    }
});

export const GetMoviesListCards = {
    getMoviesListCards: async (setMoviesListCards) => {
        let response = await tokenOptions.get(baseURL + EndPoints.movies)
        setMoviesListCards(response.data.results);
    }
}

export const GetPosterPreview = {
    getPosterPreview: async (setPosterPreview, poster_path) => {
        let response = await tokenOptions.get(posterURL + poster_path)
        setPosterPreview(response.data.url);
    }
}