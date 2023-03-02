import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    getRecipes,
    orderByAZ,
    filterDiet,
  clearDetail,
  filterByCreator
  
} from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [showFilterBar, setShowFilterBar] = useState(true);
  const [selectCreator, setSelectCreator] = useState("");
  const [selectOrder, setSelectOrder] = useState("");

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const order = (element) => {
    setSelectOrder(element.target.value);
    if (element.target.value === "Alph" || element.target.value === "Title")
      return;
    dispatch(orderByAZ(element.target.value));
  };

  const filterByDiets = (element) => {
    if (element.target.value === "dietTypes") return dispatch(clearDetail());
    dispatch(filterDiet(element.target.value));
  };

  const filterCreator = (element) => {
    setSelectCreator(element.target.value);
    if (element.target.value === "all") dispatch(getRecipes(element.target.value));
    if (element.target.value === "false") dispatch(filterByCreator(element.target.value));
    if (element.target.value === "true") dispatch(filterByCreator(element.target.value));
  };

  const clearAllFilters = () => {
    setSelectCreator("");
    setSelectOrder("");
    dispatch(clearDetail());
  };

  if (!showFilterBar) {
    return (
      <div>
        <span className="span" onClick={() => setShowFilterBar(true)}></span>
      </div>
    );
  } else {
    return (
      <div className={styles.firstContainer}>
        <div className={styles.filterscontainer}>
          <h4 className={styles.label}>Filter by</h4>
          <div className={styles.divs}>
            <select
              className={styles.input}
              onChange={filterByDiets}
            >
              <option value="dietTypes">Diets</option>
              {diets &&
                 diets
                  .map((dataDiets) => {
                    return (
                      <option value={dataDiets} key={dataDiets}>
                        {dataDiets}
                      </option>
                    );
                  })}
            </select>
          </div>
          <div className={styles.divs}>
            <select
              onChange={filterCreator}
              value={selectCreator}
              className={styles.input2}
            >
              <option value="">Source</option>
              <option value="all">All</option>
              <option value="false">Existing</option>
              <option value="true">Created</option>
            </select>
          </div>
          <h4 className={styles.label}>Order by</h4>
          <div className={styles.divs}>
            <select
              onChange={order}
              value={selectOrder}
              className={styles.input}
            >
              <option value="Alph">Alphabetical</option>
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>
          <div className={styles.divs}>
            <select
              onChange={order}
              value={selectOrder}
              className={styles.input2}
            >
              <option value="healthScore">Health Score</option>
              <option value="less">Less (-)</option>
              <option value="more">More (+)</option>
            </select>
          </div>

          <div className={styles.divs}>
            <button
              onClick={clearAllFilters}
              className={styles.btnPrimaryClearFilters}
            >
              Clear filters
            </button>
          </div>
        </div>
        <div>
          <span onClick={() => setShowFilterBar(true)}></span>
        </div>
      </div>
    );
  }
};

export default Filters;

