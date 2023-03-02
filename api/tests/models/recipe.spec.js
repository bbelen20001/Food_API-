const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));

    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });

      it('should work when a valid title is provided', () => {
        Recipe.create({ title: 'Milanesa a la napolitana' });
      });
    });

    describe('summary', () => {
      it('should throw an error if summary is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid summary')))
          .catch(() => done());
      });

      it('should work when a valid summary is provided', () => {
        Recipe.create({ title: 'Milanesa a la napolitana', summary: 'Una deliciosa receta de milanesa con tomate, jamón y queso gratinado.' });
      });
    });

    describe('createdInDb', () => {
      it('should default to true if not provided', async () => {
        const recipe = await Recipe.create({ title: 'Milanesa a la napolitana', summary: 'Una deliciosa receta de milanesa con tomate, jamón y queso gratinado.' });
        expect(recipe.createdInDb).to.be.true;
      });
    });
  });
});
