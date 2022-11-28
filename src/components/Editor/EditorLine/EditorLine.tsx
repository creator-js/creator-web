import React, {ReactNode} from 'react';
import styles from './EditorLine.module.css';

interface IProps {
    n: number;
    children: ReactNode | ReactNode[];
    depth: number;
}

export const EditorLine: React.FC<IProps> = ({n, children, depth}: IProps) => {

    const style = {
        paddingLeft: `${depth * 24}px`
    }

    return (
        <div className={styles['editor-line']}>
            <div className={styles['editor-line-content']} style={style}>{children}</div>
        </div>
    );
};
