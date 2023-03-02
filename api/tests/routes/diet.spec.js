const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Diet } = require('../../src/db.js');

const agent = session(app);

describe('Diet routes', () => {
  before(() => Diet.sync({ force: true })
    .then(() => Diet.bulkCreate([
      { name: "gluten free" },
      { name: "ketogenic" },
      { name: "vegetarian" },
      { name: "lacto-vegetarian" },
      { name: "lacto ovo vegetarian" },
      { name: "vegan" },
      { name: "pescatarian" },
      { name: "paleolithic" },
      { name: "primal" },
      { name: "whole 30" },
    ])));

  describe('GET /diets', () => {
    it('should get 200 and return all the diets', () =>
      agent.get('/diets')
        .expect(200)
        .then((res) => {
          expect(res.body.length).to.equal(10);
        })
    );
  });
});