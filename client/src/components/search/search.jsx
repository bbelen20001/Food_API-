import React, { useState } from "react";
import style from "./search.module.css";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../../redux/actions";
// import { Link } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handlechange = (element) => {
    setSearch(element.target.value);
  };

  const handleClick = () => {
    dispatch(getRecipesName(search));
    setSearch("");
  };

  const handleSubmit = (element) => {
    element.preventDefault();
    if (search) {
      dispatch(getRecipesName(search));
      setSearch("");
    }
  };
  return (
    <div className={style.containerSearch} onSubmit={handleSubmit}>
      <div className={style.searchBar}>
        <input
          className={style.inputSearchBar}
          type="text"
          placeholder="Buscar"
          onChange={handlechange}
          value={search}
        />
        <button className={style.button} onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
