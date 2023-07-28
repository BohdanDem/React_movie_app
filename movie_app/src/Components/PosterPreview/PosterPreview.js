import React, {useEffect, useState} from 'react';
import {GetPosterPreview} from "../../Services/ApiServices";

const PosterPreview = ({poster_path}) => {

    const [ posterPreview, setPosterPreview ] = useState(null);

    useEffect(() => {GetPosterPreview.getPosterPreview(setPosterPreview, poster_path)}, [])
    
    return (
        <div>
            <div>{posterPreview}</div>
        </div>
    );
};

export default PosterPreview;