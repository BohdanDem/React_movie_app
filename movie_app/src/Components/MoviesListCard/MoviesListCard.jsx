import React from 'react';

const MoviesListCard = ({moviesListCard}) => {

    const {title} = moviesListCard

    return (
        <div>
            <div>{title}</div>
        </div>
    );
};

export default MoviesListCard;