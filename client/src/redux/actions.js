import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
export const CREATE_RECIPE = "CREATE RECIPE";
//------------------------------------------------------
//-----------------------FILTROS Y ORDENAMIENTO----------------------------
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const ORDER_HEALTHSCORE_ASC = "ORDER_HEALTHSCORE_ASC";
export const ORDER_HEALTHSCORE_DESC = "ORDER_HEALTHSCORE_DESC";
export const FILTER_DIETS = "FILTER_DIETS";
export const CLEAR = "CLEAR";
export const LOADING = "LOADING";
export const GET_FILTER = "GET_FILTER";
export const ORDERED_RECIPES = "ORDERED_RECIPES";
export const GET_LOADING = "GET_LOADING";
const URL = "http://localhost:3001";
//Promises:

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}/recipes`);
    const dataDiets = await axios.get(`${URL}/diets`);
    dispatch({ type: GET_RECIPES, payload: apiData.data });
    dispatch({ type: GET_DIETS, payload: dataDiets.data });
  };
};

export const getRecipesName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}/recipes?title=`+ name)
    console.log(apiData)
    dispatch({ type: GET_RECIPES, payload: apiData.data });
  };
};

export const getRecipeId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/recipes/getone/${id}`);
      const data = response.data;
      dispatch({ type: GET_RECIPE_ID, payload: data });
    } catch (error) {
      console.log(error);
      // handle error here
    }
  };
};
export const createRecip = (value) => {
  return async function (dispatch) {
    const data = await axios.post(`${URL}/recipes/createRecipe`, value);
    dispatch({ type: CREATE_RECIPE, payload: data.data });
  };
};

//Filtros y ordanamiento

export const filterRecipes = (data) => {
  return async function (dispatch) {
    const  Apidata = await axios.get(`${URL}/recipes`, data);
    dispatch( { type: GET_FILTER, payload: Apidata.data });
  }
 
};

export const recipesOrder = () => {
  return async function (dispatch) {
    const  data = await axios.get(`${URL}/recipes`);
    dispatch ({ type: GET_FILTER, payload: data });
  }
 
};

export function orderByAZ() {
  return {
    type: ORDER_AZ,
  };
}

export function orderByZA() {
  return {
    type: ORDER_ZA,
  };
}

export function orderHealthScoreAsc() {
  return {
    type: ORDER_HEALTHSCORE_ASC,
  };
}

export function orderHealthScoreDesc() {
  return {
    type: ORDER_HEALTHSCORE_DESC,
  };
}

export function filterDiets(payload) {
  //console.log(payload,"payload");
  return {
    type: FILTER_DIETS,
    payload,
  };
}
export function clearDetail(payload) {
  return {
    type: CLEAR,
    payload,
  };
}
export const getLoading = (solicitud) => {
  return { type: GET_LOADING, payload: solicitud };
};

export function loadingAction(payload) {
  return (dispatch) => {
    dispatch({
      type: LOADING,
      payload,
    });
  };
}
