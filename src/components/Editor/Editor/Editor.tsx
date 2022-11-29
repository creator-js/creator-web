import React, {useContext, useLayoutEffect, useRef} from 'react';
import styles from './Editor.module.css';
import {EditorLine} from "@site/src/components/Editor/EditorLine";
import {Token} from "@site/src/components/Editor/Token";
import {EditorLineNumber} from "@site/src/components/Editor/EditorLineNumber";
import {EditorContext} from "@site/src/components/Editor/InteractiveEditor/InteractiveEditor";
import {EditorHeader} from "@site/src/components/Editor/EditorHeader";
import {ILine, ILineElement} from "@site/src/components/Editor/contents/commonLines";
import {steps} from "@site/src/components/Editor/steps";

export const Editor = () => {

    const editorRef = useRef<HTMLDivElement>(null);
    const {step} = useContext(EditorContext);

    let lines: ILine[] = steps[step].lines;

    const lineNumbersJSX = lines
        .filter((l: ILine) => l.appearOnStep <= step)
        .map((l: ILine, i: number) => {
            return (
                <EditorLineNumber n={i + 1} key={i}/>
            )
        })

    const linesJSX = lines
        .filter((l: ILine) => l.appearOnStep <= step && (l.hideOnStep === undefined ? true : step < l.hideOnStep))
        .map((l: ILine, i: number) => {
            const cols = l.elements.map((item: ILineElement, j: number) => {
                return <Token token={item.token} key={j}>{item.content}</Token>;
            });

            return (
                <EditorLine n={i + 1} key={i} depth={l.depth}>
                    {cols}
                </EditorLine>
            )
        });

    useLayoutEffect(() => {
        if (steps[step].scroll && editorRef.current) {
            editorRef.current.scroll({
                top: steps[step].scroll,
                behavior: 'smooth'
            });
        }
    }, [step]);

    return (
        <div className={styles['editor']}>
            <EditorHeader/>

            <div className={styles['editor__code-wrapper']} ref={editorRef}>
                <div className={styles['editor__code']}>
                    <div className={styles['editor__code-numbers']}>
                        {lineNumbersJSX}
                    </div>
                    <div className={styles['editor__code-lines']}>
                        {linesJSX}
                    </div>
                </div>
            </div>
        </div>
    );
};
