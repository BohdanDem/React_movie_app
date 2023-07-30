import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GetMovieDetails} from "../../Services/ApiServices";
import {posterURL} from "../../API/EndPoints";

const MovieDetails = () => {

    const {id} = useParams()

    const [ movieDetails, setMovieDetails ] = useState([]);

    useEffect(() => {GetMovieDetails.getMovieDetails(setMovieDetails, id)}, [id])

    const {title, poster_path, overview} = movieDetails
    return (
        <div>
            <img src={posterURL + poster_path} alt={title}/>
            <div>
                <h2>{title}</h2>
                <div>{overview}</div>
            </div>
        </div>
    );
};

export default MovieDetails;