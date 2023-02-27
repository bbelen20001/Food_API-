import { Link } from "react-router-dom";

import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import SearchBar from "../search/search";
import { useLocation } from "react-router-dom";
import { getRecipes } from "../../redux/actions";


const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();


   const getRecipesAll = ()=>{
     dispatch(getRecipes());  
   }
   
  return (
    <nav className={style.container}>
    <h1 className={style.title1}>
      Henry<span className={style.title2}>FOOD</span>
    </h1>

    <>
      <div className={style.menus}>
      <Link to="/home" className={style.opciones}>
          <h3 className={style.opciones}>Home</h3>
        </Link>
        <Link to="/create" className={style.opciones}>
          <h3>Create</h3>
        </Link>
      </div>
      <div>{location.pathname === "/home" && (
          <SearchBar className={style.searchBar} />
        )}</div>
        <button onClick={getRecipesAll}>all recipes</button>
    </>
    </nav>
  );
};

export default NavBar;
