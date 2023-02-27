import Card from "../card/Card"
import style from  "./CardsContainer.module.css"
//import { useSelector} from "react-redux"
import {Link} from "react-router-dom"
const CardsContainer = (recipes)=> {

    //const recipes =  useSelector (state=>state.recipes)
    return(
        
        <div className={style.container}>
       {recipes.currentRecipes?.map((element) => {
              return (
                <Link to={`home/${element.id}`} key={element.id}>
                    <Card
                      className={style.containerRecipes}
                      id={element.id}
                      image={element.image}
                      title={element.title}
                      healthScore={element.healthScore}
                      dietTypes={element.dietTypes}
                      key={element.id}
                    />
                  
                  </Link> );
            })}

        </div>
       
    )
}

export default CardsContainer