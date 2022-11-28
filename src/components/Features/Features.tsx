import React from 'react';
import styles from "./Features.module.css";

export const Features = () => {

    const features = [
        {
            title: 'Productivity',
            text: 'Deliver your code faster by delegating the boilerplate code routine to CreatorJS.'
        },
        {
            title: 'Focus',
            text: 'CreatorJS takes care of dull tasks, so you can focus on important and interesting ones.'
        },
        {
            title: 'Structure',
            text: 'Make your code easy to navigate by creating files within a defined folder structure.'
        }
    ];

    const featuresJSX = features.map((f, i: number) => (
        <div className={styles['landing__feature']} key={f.title}>
            <h3 className={styles['landing__feature-title']}>{f.title}</h3>
            <p className={styles['landing__feature-text']}>{f.text}</p>
        </div>
    ))

    return (
        <div className={styles['landing__features']}>
            { featuresJSX }
        </div>
    );
};
