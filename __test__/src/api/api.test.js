'use strict';

import router from '../../../src/api/api.js';
import { get, post } from 'superagent';

describe('api', () => {
  it('should return the ID for GET /?id =123', () => {

    get('http://localhost:3009/api/v1/notes?id=123')
      .then(data => console.log(data))
      .catch(err => console.error(err));
  });

  it('POST should return a status code 400 with "bad request" if no request body was provided or the body was invalid', () => {
    post('http://localhost:3009/api/v1/notes?id=123')
      .then(data => console.log(data))
      .catch(err => console.error(err));
  });
});