import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
export default function Nav(props) {
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <Link class="material-symbols-outlined" to="/home">Home</Link>
                <Link class="material-symbols-outlined" to="/about">Person</Link>
                <Link class="material-symbols-outlined" to="/favorites">Favorite</Link>
            </div>
            <img src="https://pngimg.com/uploads/rick_morty/rick_morty_PNG7.png" alt="skrill" />
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

