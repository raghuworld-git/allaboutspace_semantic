import React from 'react';
import { Helmet } from 'react-helmet';

const PageTabTitle = ({title}) => {
    return (
        <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        </>
    )
}

export default PageTabTitle
