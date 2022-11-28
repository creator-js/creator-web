import React, { useEffect } from 'react';

import { getData } from '../../services/api';

export const Atom = () => {
    useEffect(() => {
        getData();
    }, []);

    return <></>;
};
