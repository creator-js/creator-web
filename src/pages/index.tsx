import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Link from "@docusaurus/Link";
import {Features} from "@site/src/components/Features";

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="automate code creation routine">
            <div className={styles['landing__container']}>
                <div className={styles['landing__logo-wrapper']}>
                    <img className={styles['landing__logo']} src="/img/logo.png" alt="💡"/>
                    <div className={styles['landing__logo-glow']}/>
                </div>

                <h1 className={styles['landing__title']}>{siteConfig.title}</h1>
                <p className={styles['landing__text']}>{siteConfig.tagline}</p>

                <Link href='/docs/introduction' className={styles['landing__cta-link']}>
                    <button className={styles['landing__cta']} type='button'>Get Started</button>
                </Link>
            </div>

            <Features/>
        </Layout>
    );
}
