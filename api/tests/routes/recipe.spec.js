/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  


  describe('GET /recipes/getone/:id', () => {
    it('should get the recipe with the specified id', async () => {
      const newRecipe = await Recipe.create({
        title: 'Pasta carbonara',
        summary: 'Receta para hacer pasta carbonara',
        spoonacularScore: 90,
        healthScore: 75,
        instructions: '1. Cocinar la pasta ...',
        diets: ['low carb'],
      });
      agent.get(`/recipes/getone/${newRecipe.id}`).expect(200)
        .then((res) => {
          expect(res.body.title).to.equal('Pasta carbonara');
          expect(res.body.summary).to.equal('Receta para hacer pasta carbonara');
          expect(res.body.spoonacularScore).to.equal(90);
          expect(res.body.healthScore).to.equal(75);
          expect(res.body.instructions).to.equal('1. Cocinar la pasta ...');
          expect(res.body.diets).to.eql(['low carb']);
        });
    });
  });


});
