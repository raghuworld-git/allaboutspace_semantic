import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Pagination } from 'semantic-ui-react';

const PaginationComponent = ({ itemsPerPage, totalCount, pageChangeHandler }) => {

    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(Math.ceil(totalCount / itemsPerPage))

    const onPageChangeHandler = (pageNumber) => {
        console.log(pageNumber);
    }
    return (
        <>
            {/* <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={onPageChangeHandler}
                containerClassName={'ui pagination inverted menu'}

                pageLinkClassName={'item'}
                activeClassName={'active'}
                initialPage={1}


            /> */}

            <Pagination size='large' defaultActivePage={5} totalPages={pageCount} />
        </>
    )
}

export default PaginationComponent
