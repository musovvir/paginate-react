import React from 'react';

const Pagination = ({photoPerPage, totalPhotos, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPhotos / photoPerPage); i++) {
        pageNumbers.push(i)
    }

    return ( 
    <div>
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li key={number}>
                        <a href="#" className="page-link" onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))
            }
        </ul>
    </div> );
}
 
export default Pagination;