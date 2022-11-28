import React, {ReactNode} from 'react';
import styles from './Token.module.css';

export type ColorToken = 'orange' | 'white' | 'purple' | 'yellow' | 'green' | 'empty';

interface IProps {
    children: ReactNode | ReactNode[];
    token: ColorToken;
}

export const Token: React.FC<IProps> = ({ children, token }: IProps) => {

    if (token === 'empty') {
        return <>&nbsp;</>;
    }

    return (
        <span className={styles[`code__token-${token}`]}>
            {children}
        </span>
    );
};
