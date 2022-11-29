import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import styles from './InteractiveEditor.module.css';
import {FolderStructure} from "@site/src/components/Editor/FolderStructure";
import {Terminal} from "@site/src/components/Editor/Terminal";
import {Editor} from "@site/src/components/Editor/Editor";
import {Hint} from "@site/src/components/Editor/Hint";

export interface IEditorContext {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
}

export const EditorContext = createContext<IEditorContext>({
    step: 1,
    setStep: () => {}
});

export const InteractiveEditor = () => {

    const [step, setStep] = useState<number>(0);

    const context = {
        step,
        setStep
    }

    return (
        <EditorContext.Provider value={context}>
            <div className={styles['interactive-editor']}>
                <h3 id='demo' className={styles['interactive-editor__title']}>Demo</h3>
                <p className={styles['interactive-editor__description']}>
                    Learn everything you need to know about CreatorJS in under 5 minutes by completing 33 steps of this interactive course.
                </p>
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
                        <Hint/>
                    </div>
                </div>
            </div>
        </EditorContext.Provider>
    );
};
