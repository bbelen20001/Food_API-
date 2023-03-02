const { Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Diet model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Diet.sync({ force: true }));

    describe('name', () => {

      it('should work when its a valid name', () => {
        Diet.create({ name: 'vegetarian' });
      });

      it('should throw an error if name is not unique', (done) => {
        Diet.create({ name: 'vegetarian' })
          .then(() => Diet.create({ name: 'vegetarian' }))
          .then(() => done(new Error('name must be unique')))
          .catch(() => done());
      });
    });
  });
});