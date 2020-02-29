import React from 'react'

const Pagination = ({ history, key, number, currentPage }) => {
    return (
        <span onClick={e => history.push(`/movie?page=${number}`)} id={`${(number) == currentPage && "pagination--active"}`} >{number}</span>
    )
}

export default Pagination
