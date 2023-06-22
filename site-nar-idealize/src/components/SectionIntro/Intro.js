import React from 'react';
import styles from './Intro.module.css';
import backgroundImage from '..images/Parede-verde.jpeg';

function Intro() {
    const containerStyle = {
        backgroundImage: 'url(${backgroundImage})',
    };

    return (
        <div className={styles.textContainer} sytles={containerStyle}>
            <h1>Texto sobreposto</h1>
        </div>
    )
}

export default Intro