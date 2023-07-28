import React from 'react';
import PosterPreview from "../../PosterPreview/PosterPreview";
import styles from './MoviesListCard.module.css'

const MoviesListCard = ({moviesListCard}) => {

    const {title, poster_path} = moviesListCard

    return (
        <div className={styles.movieCard}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div>{title}</div>
        </div>
    );
};

export default MoviesListCard;