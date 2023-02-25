import React from "react";
//import { Link } from "react-router-dom";
import style from "./Pagination.module.css";

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
    <div className={style.container}>
      <button className={style.handler} onClick={previousPage}>
      ⋘
      </button>
      <ul className={style.li}>
        {pageNumber &&
          pageNumber.map((number) => (
            <div key={number} className={style.ul}>
              <li>
                <button
                  className={number === currentPage ? style.good : style.bad}
                 onClick={() => paged(number)}>{number}</button >
              </li>
            </div>
          ))}
      </ul>
      <button className={style.handler} onClick={nextPage}>
      ⋙
      </button>
  
        <h4>
          {currentPage} / {totalPages}
        </h4>
      </div>

  );
}
