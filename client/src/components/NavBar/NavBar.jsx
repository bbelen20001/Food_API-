import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import SearchBar from "../search/search";
import { useLocation } from "react-router-dom";
import { getRecipes } from "../../redux/actions";


const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    input: "",
    output: "",
  });
   const getRecipesAll = ()=>{
     dispatch(getRecipes());  
   }
   
  return (
    <>
      <div className={style.mainContainer}>
        <Link to="/home">Home</Link>
        <Link to="/create">Form</Link>
      </div>
      <div>{location.pathname === "/home" && (
          <SearchBar className={style.searchBar} />
        )}</div>
        <button onClick={getRecipesAll}>todas las recetas</button>
    </>
  );
};

export default NavBar;
