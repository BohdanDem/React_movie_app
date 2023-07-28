import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";

const MoviesListCard = ({moviesListCard}) => {

    const {title, poster_path} = moviesListCard

    return (
        <div>
            <div>{title}</div>
            <PosterPreview poster_path={poster_path}/>
        </div>
    );
};

export default MoviesListCard;