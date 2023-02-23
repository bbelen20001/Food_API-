import Card from "../card/Card"
import style from  "./CardsContainer.module.css"
//import { useSelector} from "react-redux"

const CardsContainer = ({ id,title, healthScore, image, dietTypes})=>{

    //const recipes =  useSelector (state=>state.recipes)
    
    return(
        <>
        <div className={style.container}>
        <Card
            id={id}
			image={image}
            title={title}
            healthScore={healthScore}
            dietTypes={dietTypes}
            key = {id}
            />

        </div>
        </>
    )
}

export default CardsContainer