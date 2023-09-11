import React, {useEffect} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarRating = ({vote_average}) => {

    useEffect(() => {}, [vote_average])

    return (
            <StarRatings
                rating={vote_average}
                starRatedColor="rgb(222 230 34)"
                numberOfStars={10}
                name='rating'
                starDimension="25px"
                starSpacing="7px"
            />
    );
};

export default StarRating;