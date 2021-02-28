import React from 'react';
import { Pagination, Icon } from 'semantic-ui-react'

const PaginationComponent = ({ totaCount, defaultActivePage = 1, pageChangeEvent, itemsPerPage }) => {

    const onPageChangeHandle = (event, data) => {
        pageChangeEvent(data.activePage * itemsPerPage)
    }
    const totalpageForPagination = Math.ceil(totaCount / itemsPerPage)
    return (
        <div>
            <Pagination
                defaultActivePage={defaultActivePage}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                totalPages={totalpageForPagination}
                onPageChange={onPageChangeHandle}
            />
        </div>
    )
}

export default PaginationComponent
