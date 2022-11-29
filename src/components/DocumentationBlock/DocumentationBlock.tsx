import React from 'react';
import styles from './DocumentationBlock.module.css';
import Link from "@docusaurus/Link";

export const DocumentationBlock = () => {
    return (
        <div className={styles['documentation-block']}>
            <p className={styles['documentation-block__text']}>Learn more about CreatorJS in the documentation.</p>

            <Link href='/docs/introduction' className={styles['documentation-block__link']}>
                <button className={styles['documentation-block__cta']} type='button'>Documentation</button>
            </Link>
        </div>
    );
};
