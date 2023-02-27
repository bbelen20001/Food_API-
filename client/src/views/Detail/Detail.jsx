import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeId,  } from "../../redux/actions";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.recipeDetail);
  console.log(detail)

  useEffect(() => {
    dispatch(getRecipeId(id));
 
  }, [dispatch, id]);


  return (
    <>
      {detail && (
        <div  className={style.container}>
          <div className={style.titulo}>
         
            <h1 >{detail.title}</h1>
          
            <img className={style.image} src={detail.image} alt={detail.title} />
          </div> 
          <div>
          <div  className={style.parraLargo} contentEditable='true' dangerouslySetInnerHTML={{ __html: detail.summary }}></div>
            <h3 >{detail.healthScore}</h3>
            <h3>{detail.ingredients}</h3>
            <h3>
             
            </h3>
          </div>
        </div>
      
      
      )}
    </>
  );
};

export default Detail;
