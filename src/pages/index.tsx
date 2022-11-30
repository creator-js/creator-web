import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Link from "@docusaurus/Link";
import {Features} from "@site/src/components/Features";
import {InteractiveEditor} from "@site/src/components/Editor/InteractiveEditor";
import {DocumentationBlock} from "@site/src/components/DocumentationBlock";

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    const onDemoClick = () => {
        const demo = document.getElementById('demo');
        if (demo) {
            demo.scrollIntoView({ behavior: 'smooth', block: 'end'})
        }
    }

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="automate code creation routine">
            <div className={styles['landing__container']}>
                <div className={styles['landing__logo-wrapper']}>
                    <img className={styles['landing__logo']} src="/img/logo.png" alt="💡"/>
                    <div className={styles['landing__logo-glow']}/>
                </div>

                <h1 className={styles['landing__title']}>{siteConfig.tagline}</h1>
                <p className={styles['landing__text']}>
                    Save time writing repeating code by delegating it to CreatorJS.
                </p>
                <p className={styles['landing__text']}>
                    Focus on what matter.
                </p>

                <div className={styles['landing__main-buttons']}>
                    <Link href='/docs/introduction' className={styles['landing__cta-link']}>
                        <button className={styles['landing__cta']} type='button'>Get Started</button>
                    </Link>

                    <button className={styles['landing__demo-button']} type='button' onClick={onDemoClick}>Try a Demo</button>
                </div>

            </div>

            <Features/>

            <InteractiveEditor/>
            <DocumentationBlock/>
        </Layout>
    );
}
