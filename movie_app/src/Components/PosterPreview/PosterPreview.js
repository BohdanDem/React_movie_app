import React from 'react';
import {posterURL} from "../../API/EndPoints";
import styles from './PosterPreview.module.css'

const PosterPreview = ({poster_path, title}) => {
    
    return (
        <div>
            <img className={styles.poster} src={posterURL + poster_path} alt={title}/>
        </div>
    );
};

export default PosterPreview;