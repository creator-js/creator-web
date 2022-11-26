import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="automate code creation routine">
            <div className={styles['landing__container']}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <Link href='/docs/introduction'>
                    <button className={styles['landing__cta']} type='button'>Get Started</button>
                </Link>
            </div>
        </Layout>
    );
}
