import React from 'react';
import PosterPreview from "../../PosterPreview/PosterPreview";
import styles from './MoviesListCard.module.css'

const MoviesListCard = ({moviesListCard, setMovieInfoId}) => {

    const {id, title, poster_path} = moviesListCard

    return (
        <div className={styles.movieCard} onClick={() => setMovieInfoId(id)}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div>{title}</div>
        </div>
    );
};

export default MoviesListCard;