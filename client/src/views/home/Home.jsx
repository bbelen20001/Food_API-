import CardsContainer from "../../CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination"
import {Link} from "react-router-dom";
import styles from "./Home.module.css"

const Home = () => {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  //const Diet = useSelector((state) => state.diets);

  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9
  const lastRecipes = currentPage * recipesPerPage;
  const firstRecipes = lastRecipes - recipesPerPage;
  const currentRecipes = recipes.slice(firstRecipes, lastRecipes);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  
  return (
    <>
      <div>
        <div>
          <Pagination 
            recipesPerPage={recipesPerPage}
            Recipes={recipes.length}
            paged={pagination}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />

          <div className={styles.displayCards}>
            {currentRecipes?.map((element) => {
              return (
                
                <div key={element.id}>
      
                  <Link  to={`/home/${element.id}`}>
                    <CardsContainer
                      className={styles.displayCards}
                      id={element.id}
                      image={element.image}
                      title={element.title}
                      healthScore={element.healthScore}
                      dietTypes={element.dietTypes}
                      key={element.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div>
        
        </div>
      </div>
    </>
  );
};

export default Home;
