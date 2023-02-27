import CardsContainer from "../../CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const lastRecipes = currentPage * recipesPerPage;
  const firstRecipes = lastRecipes - recipesPerPage;
  const currentRecipes = allRecipes?.slice(firstRecipes, lastRecipes);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <div className={style.containerRecipes}>
        <Pagination
          recipesPerPage={recipesPerPage}
          Recipes={allRecipes.length}
          paged={pagination}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div>
      
   
              <CardsContainer currentRecipes={currentRecipes} />
    
      
      </div>
    </div>
  );
};

export default Home;
