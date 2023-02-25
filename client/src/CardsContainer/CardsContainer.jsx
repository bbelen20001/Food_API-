import Card from "../card/Card"
import style from  "./CardsContainer.module.css"
//import { useSelector} from "react-redux"

const CardsContainer = (recipes)=> {

    //const recipes =  useSelector (state=>state.recipes)
    return(
        
        <div className={style.container}>
       {recipes.currentRecipes?.map((element) => {
              return (
                
                  
                <div key={element.id}>
      
                    <Card
                      className={style.containerRecipes}
                      id={element.id}
                      image={element.image}
                      title={element.title}
                      healthScore={element.healthScore}
                      dietTypes={element.dietTypes}
                      key={element.id}
                    />
                  
                </div> );
            })}

        </div>
       
    )
}

export default CardsContainer