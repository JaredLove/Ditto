import React from "react";


const Pagination = ({ namesPerPage, totalNames, paginate }) => {

    const PageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalNames / namesPerPage); i++) {
        PageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
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