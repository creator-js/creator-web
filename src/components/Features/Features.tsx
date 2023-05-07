import React from 'react';
import styles from './Features.module.css';

export const Features = () => {

  const features = [
    {
      title: 'Productivity',
      text: 'Reduce development time by automating repetitive tasks and generating code templates based on your specific requirements.'
    },
    {
      title: 'Consistency',
      text: 'Maintain consistent project structure, to make it easier to manage your codebase'
    },
    {
      title: 'Flexibility',
      text: 'Customize your CLI by defining your own questions and templates.'
    }
  ];

  const featuresJSX = features.map((f, i: number) => (
    <div className={styles['landing__feature']} key={f.title}>
      <h3 className={styles['landing__feature-title']}>{f.title}</h3>
      <p className={styles['landing__feature-text']}>{f.text}</p>
    </div>
  ));

  return (
    <div className={styles['landing__features']}>
      <div className={styles['landing__features-inner']}>
        {/*<h3 className={styles['landing__features-title']}>It's time for improvements</h3>*/}
        <div className={styles['landing__features-list']}>
          {featuresJSX}
        </div>
      </div>
    </div>
  );
};
