import React, {useEffect, useState} from 'react';
import MoviesListCard from "./MoviesListCard/MoviesListCard";
import {GetMoviesListCards} from "../../Services/ApiServices";
import styles from './MoviesListCards.module.css'
import MovieInfo from "../ MovieInfo/MovieInfo";

const MoviesListCards = () => {

    const [ moviesListCards, setMoviesListCards ] = useState([]);
    const [ movieInfoFirstId, setMovieInfoFirstId ] = useState([]);
    const [ movieInfoId, setMovieInfoId ] = useState(null);

    useEffect(() => {GetMoviesListCards.getMoviesListCards(setMoviesListCards, setMovieInfoFirstId)}, [])

    return (
        <div>
            <div>

                <MovieInfo
                    moviesListCards={moviesListCards}
                    movieInfoFirstId={movieInfoFirstId}
                    movieInfoId={movieInfoId}
                />
            </div>
            <div className={styles.wrapper}>
                {moviesListCards.map((moviesListCard) => {
                    return (
                        <MoviesListCard
                            key={moviesListCard.id}
                            moviesListCard={moviesListCard}
                            setMovieInfoId={setMovieInfoId}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default MoviesListCards;