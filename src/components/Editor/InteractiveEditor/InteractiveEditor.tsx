import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import styles from './InteractiveEditor.module.css';
import {FolderStructure} from "@site/src/components/Editor/FolderStructure";
import {Terminal} from "@site/src/components/Editor/Terminal";
import {Editor} from "@site/src/components/Editor/Editor";
import {steps} from "@site/src/components/Editor/steps";

export interface IEditorContext {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
}

export const EditorContext = createContext<IEditorContext>({
    step: 1,
    setStep: () => {}
});

export const InteractiveEditor = () => {

    const [step, setStep] = useState<number>(24);

    const context = {
        step,
        setStep
    }

    return (
        <EditorContext.Provider value={context}>
            <div className={styles['interactive-editor']}>
                <div className={styles['interactive-editor__editor']}>
                    <div className={styles['editor__top']}>
                        <div className={styles['editor__aside']}>
                            <FolderStructure/>
                        </div>
                        <div className={styles['editor__main']}>
                            <Editor/>
                        </div>
                    </div>
                    <div className={styles['editor__terminal']}>
                        <Terminal/>
                    </div>

                </div>
            </div>
            <div>
                <div>{steps[step].text} - ${step}</div>
                <button onClick={() => setStep((s) => s - 1 < 0 ? 0 : s - 1)}>prev</button>
                <button onClick={() => setStep((s) => s + 1 > steps.length - 1 ? steps.length - 1 : s + 1)}>next</button>
            </div>
        </EditorContext.Provider>
    );
};
