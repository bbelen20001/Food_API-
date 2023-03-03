import { useState } from "react";
import style from "./Form.module.css";
import Validate from "../../middleware/Validate"
import axios from "axios";
import { Link } from "react-router-dom";


const Form = ()=>{
  const [form,setForm] = useState({
    title: " " ,
    dietTypes: 	" " ,
     summary: " ",
    healthScore: " "
  });
  const [errors,setErrors]= useState({
    title: " " ,
    dietTypes: 	" " ,
     summary: " ",
    healthScore: " ",
    diets: []
  })
  const changeHandler=(event)=>{
    const property = event.target.name;
    const value=event.target.value;

    setForm({...form,[property]:value})
    setErrors (Validate({...form,[property]:value}));
  }
  

  const submitHandler =(event)=>{
    event.preventDefault();
    console.log(form)
    if (!form.name) delete form.name;
    if (!form.description) delete form.description;
    axios
      .post(`https://foodhenry.onrender.com/recipes/createRecipe`, form)
      .then((res) => alert(res.data))
      .catch((err) => alert(err.response.data.error));
    //clean form
    setForm({
      ...form,
      title: " " ,
      dietTypes: 	" " ,
       summary: " ",
      healthScore: " ",
     
    });
  };
    return(
      <div className={style.containerForm}>
      <div>
     

        <Link to="/home">
          <div className={style.btnRetroceder}></div>
        </Link>

       
      </div>
      <div className={style.contForm}>
        <p className={style.titulo}>Crea tu propia receta!</p>
        <form onSubmit={submitHandler} className={style.form}>
          <div className={style.info}>
            <label className={style.label}>Name</label>
          <input 
          
          className={form.title ? style.great : style.failed}
          type="text"
           value={form.title} 
           onChange={changeHandler} 
           name="title">
           </input>
          {errors.title && <span>{errors.title}</span>}
        <div>
        </div>

      
        <div className={style.info}>
            <label className={style.label}>dietTypes </label>
          <textarea className={form.dietTypes? style.greatArea : style.failedArea}
          type="text" 
          value= {form.dietTypes} 
          onChange={changeHandler} 
          name="dietTypes"/>
        </div>
        </div>

        <div className={style.info}>
            <label className={style.label}>summary</label>
            </div>
        <div>
          <input type="text" value= {form.summary} onChange={changeHandler} name="summary"/>
          {errors.summary && <span>{errors.summary}</span>}
        </div>
        
        <div>
        <div className={style.info}>
            <label className={style.label}>HealthScore </label>
            </div>
            <input
              className={style.intRange}
              onChange={changeHandler}
              value={form.healthScore}
              name="healthScore"
              min="0"
              max="100"
              type="range"
            />
            <span className={style.healthScore}>{form.healthScore}</span>
            {errors.healthScore && <span>{errors.healthScore}</span>}
          </div>
          <button className={style.btnForm}>CREATE</button>

       </form>
       </div>
    </div>
    )
   }
  
   export default Form;