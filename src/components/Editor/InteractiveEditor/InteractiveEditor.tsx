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

    const [step, setStep] = useState<number>(30);

    const context = {
        step,
        setStep
    }

    return (
        <EditorContext.Provider value={context}>
            <div className={styles['interactive-editor']}>
                <h3 className='landing__block-title'>Demo</h3>
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
