import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Pagination } from 'semantic-ui-react';

const PaginationComponent = ({ itemsPerPage, totalCount, pageChangeHandler,currentActivePage }) => {
    
    const pageCount = Math.round(totalCount / itemsPerPage);

    const onPageChangeHandler = (event,data) => {
       pageChangeHandler(data.activePage);
    }
    return (
        <>           
            <Pagination size='large' defaultActivePage={1} totalPages={pageCount} onPageChange={onPageChangeHandler}  /> 
        </>
    )
}

export default PaginationComponent
