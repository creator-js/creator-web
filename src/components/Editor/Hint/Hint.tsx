import React, {useCallback, useContext} from 'react';
import styles from './Hint.module.css';
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";
import {steps} from "@site/src/components/Editor/steps";
import clsx from 'clsx';
import Link from "@docusaurus/Link";

export const Hint = () => {

    const { step, setStep } = useContext(EditorContext);

    const onNavigate = useCallback((n: number) => () => {

        setStep((s: number) => {
            let nextStep = s;

            if (n < 0) {
                nextStep = nextStep + n < 0 ? 0 : nextStep + n;
            } else {
                nextStep = nextStep + n > steps.length - 1 ? steps.length - 1 : nextStep + n;
            }

            return nextStep
        });
    }, [setStep])

    const text = steps[step].text;

    const prevButtonClsx = clsx(styles['hint__footer-button'], step === 0 ? styles['hint__footer-button--hidden'] : '');
    const nextButtonClsx = clsx(styles['hint__footer-button'], step === steps.length - 1 ? styles['hint__footer-button--hidden'] : '');
    const docButtonClsx = clsx(styles['hint__footer-button']);

    return (
        <div className={styles['hint']}>
            <div className={styles['hint__header']}>
                <div className={styles['hint__header-label']}>Step:</div>
                <div className={styles['hint__header-tab']}>#{step + 1}</div>
            </div>

            <div className={styles['hint__content']}>
                { text }

                <footer className={styles['hint__footer']}>
                    <button className={prevButtonClsx} onClick={onNavigate(-1)}>Previous</button>
                    <button className={nextButtonClsx} onClick={onNavigate(1)}>Next</button>
                </footer>
            </div>

        </div>
    );
};
