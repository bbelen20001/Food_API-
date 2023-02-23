import React from "react";
//import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";

export default function Pagination({
  recipesPerPage,
  Recipes,
  paged,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(Recipes / recipesPerPage); i++) {
    pageNumber.push(i);
  }

  const totalPages = Math.ceil(Recipes / recipesPerPage);

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  if (currentPage > totalPages) previousPage();

  return (
    <div className={styles.container}>
      <button className={styles.btnPrimaryPrevious} onClick={previousPage}>
        Previous page
      </button>
      <ul className={styles.li}>
        {pageNumber &&
          pageNumber.map((number) => (
            <div key={number} className={styles.ul}>
              <li>
                <button onClick={() => paged(number)}>{number}</button >
              </li>
            </div>
          ))}
      </ul>
      <button className={styles.btnPrimaryNext} onClick={nextPage}>
        Next page
      </button>
      <div className={styles.h4}>
        <h4>
          {currentPage} / {totalPages}
        </h4>
      </div>
    </div>
  );
}
