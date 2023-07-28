import React, {useEffect, useState} from 'react';
import MoviesListCard from "./MoviesListCard/MoviesListCard";
import {GetMoviesListCards} from "../Services/ApiServices";

const MoviesListCards = () => {

    const [ moviesListCards, setMoviesListCards ] = useState([]);

    useEffect(() => {GetMoviesListCards.getMoviesListCards(setMoviesListCards)}, [])

    return (
        <>
            {moviesListCards.map((moviesListCard) => {
                return (
                    <MoviesListCard
                        key = {moviesListCard.id}
                        moviesListCard={moviesListCard}
                    />
                )
            })}
        </>
    );
};

export default MoviesListCards;