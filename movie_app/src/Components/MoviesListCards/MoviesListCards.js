import React, {useEffect, useState} from 'react';
import MoviesListCard from "./MoviesListCard/MoviesListCard";
import {GetMoviesListCards} from "../../Services/ApiServices";
import styles from './MoviesListCards.module.css'
import MovieInfo from "../ MovieInfo/ MovieInfo";

const MoviesListCards = () => {

    const [ moviesListCards, setMoviesListCards ] = useState([]);

    useEffect(() => {GetMoviesListCards.getMoviesListCards(setMoviesListCards)}, [])

    return (
        <div>
            <div>
                <MovieInfo moviesListCards={moviesListCards} />
            </div>
            <div className={styles.wrapper}>
                {moviesListCards.map((moviesListCard) => {
                    return (
                        <>
                            <MoviesListCard key={moviesListCard.id} moviesListCard={moviesListCard}/>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default MoviesListCards;