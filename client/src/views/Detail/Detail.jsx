import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeId,  } from "../../redux/actions";
import { useParams } from "react-router-dom";

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
        <div>
          <div>
            <h1>{detail.title}</h1>
            <img src={detail.image} alt={detail.title} />
          </div>
          <div>
            <h3>{detail.summary}</h3>
            <h3>{detail.healthScore}</h3>
            <h3>{detail.ingredients}</h3>
            <h3>
              {/* Diet:{" "}
              {detail.dietTypes.map((element, index) => (
                <span key={index}> {element.name}key</span>
              ))} */}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
