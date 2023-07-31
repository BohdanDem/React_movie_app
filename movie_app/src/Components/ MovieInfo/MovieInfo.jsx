import React, {useEffect, useState} from 'react';
import {GetMovieInfo} from "../../Services/ApiServices";
import {posterURL} from "../../API/EndPoints";
import styles from './MovieInfo.module.css'
import {useNavigate} from "react-router-dom";

const MovieInfo = ({movieInfoFirstId, movieInfoId}) => {

    const [ movieInfo, setMovieInfo ] = useState([]);
    let Id = movieInfoId? movieInfoId : movieInfoFirstId
    const navigate = useNavigate()

    useEffect(() => {GetMovieInfo.getMovieInfo(setMovieInfo, Id)}, [Id])

    const handleClick = (id) => navigate(`/movieDetails/${id}`)

    const {id, title, poster_path, overview} = movieInfo
    return (
        <div className={styles.MovieInfo}>
            <img src={posterURL + poster_path} alt={title}/>
            <div className={styles.description}>
                <h2>{title}</h2>
                <div>{overview}</div>
                <button onClick={() => handleClick(id)}>Show More</button>
            </div>
        </div>
    );
};

export default MovieInfo;