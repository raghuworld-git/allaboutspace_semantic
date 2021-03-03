import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationComponent = ({ itemsPerPage, totalCount, pageChangeHandler, currentActivePage }) => {

    const pageCount = Math.round(totalCount / itemsPerPage);

    const onPageChangeHandler = (event, data) => {
        pageChangeHandler(data.activePage);
    }
    return (
        <>
            <Pagination size='large' defaultActivePage={currentActivePage} totalPages={pageCount} pointing
                secondary onPageChange={onPageChangeHandler} />
        </>
    )
}

export default PaginationComponent
