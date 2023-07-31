import React from 'react';

const MovieGenre = ({genre}) => {

    const {name} = genre

    return (
        <div>
            {name}
        </div>
    );
};

export default MovieGenre;