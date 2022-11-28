import React from 'react';
import styles from './EditorLineNumber.module.css'

interface IProps {
    n: number;
}

export const EditorLineNumber: React.FC<IProps> = ({ n }: IProps) => {
    return (
        <div className={styles['editor-line-number']}>
            <span className={styles['editor-line-number-text']}>
                {n}
            </span>
        </div>
    )
};
