import React from 'react';

function Pagination({ pokmnPerPage, totalPokmn, paginate }) {
    const pageNumbers = [];  

    for(let i = 1; i <= Math.ceil(totalPokmn / pokmnPerPage); i++ ) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className='pagination' >
                {pageNumbers && pageNumbers.map(number => (
                    <div key={number} className='page-item'>
                        <button onClick={() => paginate(number)} href='!#' className='page-link' >
                        {number}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Pagination;