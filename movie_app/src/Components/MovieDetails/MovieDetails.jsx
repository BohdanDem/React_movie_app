import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetMovieDetails} from "../../Services/ApiServices";
import {posterURL} from "../../API/EndPoints";
import styles from './MovieDetails.module.css'
import MovieGenres from "../MovieGenres/MovieGenres";
import StarRating from "./StarRating/StarRating";

const MovieDetails = () => {

    const {id} = useParams()
    const [ movieDetails, setMovieDetails ] = useState([]);

    useEffect(() => {GetMovieDetails.getMovieDetails(setMovieDetails, id)}, [id])

    const {title, poster_path, overview, vote_average, genres} = movieDetails
    return (
        <div className={styles.Movie}>
            <img src={posterURL + poster_path} alt={title}/>
            <div className={styles.description}>
                <h2>{title}</h2>
                <div><StarRating vote_average={vote_average}/></div>
                <div><MovieGenres genres={genres}/></div>
                <div>{overview}</div>
            </div>
        </div>
    );
};
export default MovieDetails;