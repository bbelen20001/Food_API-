const {
  getAllRecipes,
  getOneHandler,
  getRecipesByDiet,
  getOrdenAsc,
  getOrdenDsc,
} = require("../controllers/recipeControllers.js");
const { createRecip } = require ("../controllers/CreateRecipe");

const searchRecipes = async (req, res) => {

  // para las queries
  //Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
  //Si no existe ninguna receta mostrar un mensaje adecuado
  try {
    const title = req.query.title;
    const recipesTotal = await getAllRecipes();
    if (title) {
      const recipesTitle =recipesTotal.filter((element) =>
        element.title.toLowerCase().includes(title.toLowerCase())
      );
      recipesTitle.length
        ? res.status(200).send(recipesTitle)
        : res.status(200).send("Title not exit");
    } else {
      res.status(200).json(recipesTotal);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


  const createRecipes = async (req,res)=>{
    try{
      const newRecip = await createRecip(req.body);
      res.status(201).json(newRecip);
    }catch(error){
      res.status(500).json({error: error.message});
    }
  };
 const searchOne = async (req, res)=>{
  try{
    const id = req.params.id 
    const source = await getOneHandler (id);
    res.status(200).json(source);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
 }
 
 const  filterByDiets = async (req, res)=>{
  try{
   const dietName = req.query.dietName
   const filterDiet = await  getRecipesByDiet (dietName);
   res.status(200).json(filterDiet);
 }catch(error){
   res.status(404).json({ error: error.message });
  }

  }
  const filterAsc = async(req,res)=>{
    try{
      const filterAs= await  getOrdenAsc ();
      res.status(200).json(filterAs);
    }catch(error){
      res.status(404).json({ error: error.message });
     }
  }
  const filterDesc= async(req,res)=>{
    try{
      const filterDes = await  getOrdenDsc ();
      res.status(200).json(filterDes);
    }catch(error){
      res.status(404).json({ error: error.message });
     }
  }
 

module.exports = {
  searchRecipes,
  createRecipes,
  searchOne,
  filterByDiets,
  filterAsc,
  filterDesc,
};
