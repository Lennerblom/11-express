'use strict';

import superagent from 'superagent';
import {start, stop} from '../../../src/app.js';
import Chores from '../../../src/models/chores.js';
import router from '../../../src/api/api.js';

describe('app module', () => {

  beforeAll( () => {
    start(3009);
  });

  afterAll( () => {
    stop();
  });

  it('should return 200 for homepage', (done) => {
    superagent.get('http://localhost:3009/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        console.log(response.status);
        expect(response.text).toEqual('Hello ');
        done();
      });
    
  });

  it('should create a chore', () => {
 
    let newChore = {assignedTo: 'Lydia', choreName: 'dishes'};

    return superagent.post('http://localhost:3009/api/v1/chores')
      .send(newChore)
      .then(results => {
        const chore = JSON.parse(results.text);
        expect(chore.choreName).toBe('dishes');
        console.log(chore.choreName);
      });
  });
});
  
// xit('POST: test 200, it should respond with the body content for a post request with a valid body', (post) => {
  
// });


// xit('GET: test 400, it should respond with "bad request" if no id was provided in the request', () => {
//   return superagent.get('http://localhost:3009/api/v1?id=')
//     .then(response => {
//       expect(response.statusCode).toBe(404);
//     });
// });
  
// xit('GET: test 404, it should respond with "not found" for valid requests made with an id that was not found', () => {
//   return superagent.get('http://localhost:3009/api/v1?id=12345')
//     .then(response => {
//       expect(response.statusMessage).toBe('Not Found');
//     });
// });
  
// xit('GET: test 200, it should contain a response body for a request made with a valid id', () => {
//   return superagent.get('http://localhost:3009/api/v1/(req.params.id)')
//     .then(response => {
//       expect(response.statusCode).toBe(200);
//       expect(response.text).toEqual('Hello');
//     });
//});
