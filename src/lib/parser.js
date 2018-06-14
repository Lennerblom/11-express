'use strict';

// First Party Modules
const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

  return new Promise( (resolve,reject) => {

    if( !(req || req.url) ) { reject('Invalid Request Object. Cannot Parse'); }

    //req.url = 'http://localhost:3002/api/v1/notes?id=123';
    req.parsed = url.parse(req.url);
    
    // req.parsed = {
    //   pathname: '/api/vi/dogs',
    //   query: '?id=123&name=Masey',
    // };
       

    req.query = queryString.parse(req.parsed.query);
    
    // req.query = {
    //   id:123,
    //   name:'Masey',
    // };
       

    if(! req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }

    let text = '';

    req.on('data', (buffer) => {
      text += buffer.toString();
    });

    req.on('end', () => {
      try{
        req.body = JSON.parse(text);
        resolve(req);
      }
      catch(err) { reject(err); }

    });

    req.on('err', reject);

  });

};