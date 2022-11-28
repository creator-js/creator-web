import React, {useContext} from 'react';
import styles from './Terminal.module.css';
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";
import {steps} from "@site/src/components/Editor/steps";

export const Terminal = () => {

    const {step} = useContext(EditorContext);

    return (
        <div className={styles['terminal']}>
            <div className={styles['terminal__header']}>
                <div className={styles['terminal__header-label']}>Terminal:</div>
                <div className={styles['terminal__header-tab']}>Local</div>
            </div>

            <div className={styles['terminal__content']}>
                {steps[step].command && (
                    <div className={styles['terminal__command']}>
                        {steps[step].command}
                    </div>
                )}

                {steps[step].question && (
                    <div className={styles['terminal__question']}>
                        {steps[step].question}
                    </div>
                )}

                {steps[step].answer && (
                    <div className={styles['terminal__option']}>
                        {steps[step].answer}
                    </div>
                )}

            </div>

        </div>
    );
};
