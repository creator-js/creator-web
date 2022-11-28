import React from 'react';
import styles from "./Features.module.css";

export const Features = () => {

    const features = [
        {
            title: 'Enhance productivity',
            text: 'Deliver your code faster by delegating the boilerplate code creation routine to CreatorJS.'
        },
        {
            title: 'Establish structure',
            text: 'Define folder structure and make your code easy to navigate and maintain.'
        },
        {
            title: 'Do what you love',
            text: 'CreatorJS takes care of dull tasks, so you can focus on interesting ones.'
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
            <h3 className={styles['landing__features-title']}>It's time for improvement</h3>
            <div className={styles['landing__features-list']}>
                {featuresJSX}
            </div>
        </div>
    );
};
