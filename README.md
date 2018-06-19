[![Build Status](https://travis-ci.org/Lennerblom/11-express.svg?branch=master)](https://travis-ci.org/Lennerblom/11-express)

# 11: Express Server
___
###### TRAVIS: https://travis-ci.org/Lennerblom/11-express
###### HEROKU: https://express-server11.herokuapp.com/
###### PR: https://github.com/Lennerblom/11-express/pull/2
___
This server was created using Express.  The home route URL is: https://express-server11.herokuapp.com/ and accepts an optional name query string (?name=name), which will display "Hello" or "Hello Name" if option is added.  It will handle `GET`, `POST`, and `DELETE` requests. 

### **In order to run my app, do the following:**

Fork this repo and clone it to your system so you can run the below commands.  In the terminal cd into the root folder of the cloned repo.  Type `npm init -y` then `npm i` to load the dependencies. Type `npm run watch` to start the server with nodemon.

Open another tab in the terminal and run the following commands with HTTPie

* Using HTTPie run the following commands in the terminal in order:

  1. `http POST :3009/api/v1/chores choreName=dishes assignedTo=Lydia`

  You should receive a JSON object in the terminal and you'll need to copy and paste the long id and replace the id in the GET, and DELETE commands below.

  2. `http GET :3009/api/v1/chores?id=829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda`

  3. `http DELETE :3009/api/v1/chores?id=829c4c60-6df0-11e8-8bb8-8f5a2fd3ddda`
