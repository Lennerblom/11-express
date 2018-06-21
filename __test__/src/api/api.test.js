'use strict';

import superagent from 'superagent';
const app = require('../../../src/app.js');
// import Chores from '../../../src/models/chores.js';
// import router from '../../../src/api/api.js';

describe('app module', () => {

  beforeAll( () => {
    app.start(3009);
  });

  afterAll( () => {
    app.stop();
  });

  it('POST should create a chore instance with the body content for a post request with a valid body', () => {
 
    let newChore = {assignedTo: 'Lydia', choreName: 'dishes'};

    return superagent.post('http://localhost:3009/api/v1/chores')
      .send(newChore)
      .then(results => {
        const chore = JSON.parse(results.text);
        expect(chore.choreName).toBe('dishes');
        console.log(chore.choreName);
      });
  });

  it('GET: test 400, it should respond with "bad request" if no id was provided in the request', () => {
    return superagent.get('http://localhost:3009/api/v1?i')
      .then(results => {
        let errorCode = results.statusCode;
        expect(errorCode).toBe(400);
      });
  });

  
  it('GET: test 404, it should respond with "not found" for valid requests made with an id that was not found', () => {
    return superagent.get('http://localhost:3009/api/v1?id=12345')
      .then(results => {
        let errorCode = results.statusCode;
        expect(errorCode).toBe(404);
      });
  });
  
  it('GET: test 200, it should contain a response body for a request made with a valid id', () => {
    let newChore = {assignedTo: 'Lydia', choreName: 'dishes'};

    return superagent.post('http://localhost:3009/api/v1/chores')
      .send(newChore)
      .then(results => {
        const chore = JSON.parse(results.text);
        return superagent.get('http://localhost:3009/api/v1/' + chore.id)
          .then(results => {
            const getChore = JSON.parse(results.text);
            expect(getChore.assignedTo).toBe('Lydia');
          });
      });
  });
});