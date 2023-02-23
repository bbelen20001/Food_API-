import style from "./Card.module.css"
const Card =({ id,title, healthScore, image, dietTypes})=>{

    return (
        <>
        <div className={style.card}>
        <img src={image} width="150" height="150" alt="img"/>
         <p>title:{title}</p> 
         <p>healthScore:{healthScore}</p>
        <p>dietTypes:{dietTypes}</p>
        </div>
    </>
    )
}


export default Card