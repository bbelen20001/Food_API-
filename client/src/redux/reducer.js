import {
  GET_RECIPES,
  GET_DIETS,
  GET_RECIPES_NAME,
  GET_RECIPE_ID,
  GET_LOADING,
  CREATE_RECIPE,
  ORDER_HEALTHSCORE_ASC,
  ORDER_HEALTHSCORE_DESC,
  CLEAR,
  GET_DIETFILTER,
  GET_FILTERDIET,
  //LOADING,
  GET_FILTER,
  ORDERED_RECIPES,
  FILTER_BY_CREATOR,
  GET_RECIPE_NAMES,
} from "./actions";

const initialState = {
  recipesFilters: [],
  recipes: [],
  recipesAll: [],
  diets: [],
  recipeDetail: {},
  loading: false,
  favorites: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: actions.payload,
        recipesAll: actions.payload,
        diets: actions.data,
      };

      case FILTER_BY_CREATOR:
      if(actions.payload=== "All"){
        return {
          ...state,
          recipes: state.recipesAll
        }
      }
      const filteredCreator = state.recipesAll.filter((p) => {
        return p.createdInDb?.toString() === actions.payload;
      });
      console.log(filteredCreator)
      if (filteredCreator.length) {
        return {
          ...state,
          recipes: filteredCreator,
        };
      } else {
        return {
          ...state,
          recipes: [],
        };
      }

    case GET_RECIPES_NAME:
      const receta = actions.payload;
      return {
        ...state,
        recipesFilters: [...receta],
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipeDetail: actions.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: actions.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
      };
   case GET_RECIPE_NAMES:
    return{
      ...state,
      recipes: actions.payload
    }
   

    case ORDER_HEALTHSCORE_ASC:
      let resultAsc = state.recipes.sort(function (a, b) {
        if (a.healthScore > b.healthScore) return 1;
        if (a.healthScore < b.healthScore) return -1;
        return 0;
      });
      return {
        ...state,
        recipe: resultAsc,
      };
    case ORDER_HEALTHSCORE_DESC:
      let resultDesc = state.recipe.sort(function (a, b) {
        if (a.healthScore > b.healthScore) return -1;
        if (a.healthScore < b.healthScore) return 1;
        return 0;
      });
      return {
        ...state,
        recipe: resultDesc,
      };


case  GET_DIETFILTER:
  const allfilter = [...state.recipesAll]
      if (actions.payload === "all") {
        return {
          ...state,
          recipe:allfilter,
        };
      } else {
        const dietSelector = actions.payload
        const ff = allfilter.filter((element) => {
          return element.dietTypes?.includes( dietSelector)

     } 
    );
        return {
          ...state,
          recipe: ff,
        };

      }
    case   GET_FILTERDIET:
      console.log(actions.payload)
   
      return {
        ...state,
         recipes: actions.payload,
        recipesAll: actions.payload,
        diets: actions.data,
      };
   
      
    case CLEAR:
      return {
        ...state,
        recipeDetail: actions.payload,
      };
      
    case GET_LOADING:
      return {
        ...state,
        loading: actions.payload,
      };
    
    case GET_FILTER:
      return {
        ...state,
        recipesFilters: actions.payload,
      };
    case ORDERED_RECIPES:
      return {
        ...state,
        ordered: !state.ordered,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
