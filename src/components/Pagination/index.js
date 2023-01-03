import React from "react";

// <= Math.ceil(totalNames / namesPerPage)
const Pagination = ({ namesPerPage, totalNames, paginate }) => {

    const PageNumbers = [];

    for(let i = 1; i < 28; i++) {
        PageNumbers.push(i);
    }

    return (
        <nav className="pagiNav" aria-label="...">
            <ul className="pagination pagination-sm">
                {PageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;