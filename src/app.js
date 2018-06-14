'use strict';

import express from 'express';
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Flag to know if we are up and going
let isRunning = false;

export function start(port) {
  if (!isRunning) {
    app.listen(port, (err) => {
      if (err) {
        throw err;
      }
      // Tick the running flag
      isRunning = true;
      console.log('Server is up on port', port);
    });
  }
  else {
    console.log('Server is already running');
  }
}
export function stop() {
  app.close(() => {
    isRunning = false;
    console.log('Server has been stopped');
  });
}