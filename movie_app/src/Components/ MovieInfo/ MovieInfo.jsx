import React, {useEffect, useState} from 'react';
import {GetMovieInfo} from "../../Services/ApiServices";
import {posterURL} from "../../API/EndPoints";
import styles from './MovieInfo.module.css'

const MovieInfo = ({movieInfoFirstId, movieInfoId}) => {

    const [ movieInfo, setMovieInfo ] = useState([]);
    let id = movieInfoId? movieInfoId : movieInfoFirstId

    useEffect(() => {GetMovieInfo.getMovieInfo(setMovieInfo, id)}, [id])

    const {title, poster_path, overview} = movieInfo
    return (
        <div className={styles.MovieInfo}>
            <img src={posterURL + poster_path} alt={title}/>
            <div className={styles.description}>
                <h2>{title}</h2>
                <div>{overview}</div>
            </div>
        </div>
    );
};

export default MovieInfo;