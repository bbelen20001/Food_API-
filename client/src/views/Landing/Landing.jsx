import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css"
// export default function Landing(){

//     return(
//        <div>
//          <h1>Esta es la vista de Landing</h1>
//          <Link to= '/recipes'>
//           <button>Login</button>
//          </Link>
//        </div>
//     )
//    }
const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.titulo}>Henry | FOOD</h1>
      <div className={style.containerText}>
        <p className={style.texto}>
          Conoce y disfruta de miles de recetas a solo un
          <span className={style.texto2}> ¡click! </span>
          <span className={style.texto2}> Henry Food</span>
        </p>
      </div>
      <div className={style.containeringreso}>
        <Link to='/recipes'>
          <button className={style.button}>Empieza Ahora »</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing; 
