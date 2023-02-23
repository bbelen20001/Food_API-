const {Diet,Recipe} = require ("../db")

const createRecip = async (body) => {
    const {title,summary, healthScore,dietTypes,steps} = body;
  
    const newRecip = await Recipe.create({
      title: title,
      summary: summary,
      healthScore: healthScore,
      dietTypes: dietTypes,
      steps: steps,
     // ingredients,
    });
    
    const allDiets = await Diet.findAll({ where: { name: dietTypes } });
    await newRecip.addDiets(allDiets);

   return newRecip;
  };

  //--------------------------------------------------------------------------



  module.exports = {
    createRecip,
  
  };