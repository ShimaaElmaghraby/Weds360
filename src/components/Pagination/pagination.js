import React from 'react'
import style from './pagination.module.css'

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
      pageNumbers.push(i);
    }
    return (<nav>
              <ul className={style.pagination}>
                {pageNumbers.map(number => (
                  <li key={number} className={style.pageItem}>
                    <a onClick={() => paginate(number)} className={style.pageLink}>
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
    );
  };
export default Pagination