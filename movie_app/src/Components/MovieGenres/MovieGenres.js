import React from 'react';
import MovieGenre from "./MovieGenre/MovieGenre";
import styles from './MovieGenres.module.css'

const MovieGenres = ({genres}) => {

    return (
        <div className={styles.genres}>
            {genres && genres.map((genre) => {
                return (
                    <div className={styles.genre}>
                        <MovieGenre
                            key={genre.id}
                            genre={genre}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default MovieGenres;