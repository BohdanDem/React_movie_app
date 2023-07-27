import {NavLink} from "react-router-dom";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={''}>Movies</NavLink>
            <NavLink to={'/music'}>Music</NavLink>
        </div>
    );
};