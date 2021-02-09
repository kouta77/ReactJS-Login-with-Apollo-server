# Enmanuel React Login App
features:

- Error tips
- password encryption
- user login
- user signup
- route protection
- graphql backend
- auth security


# Steps to run this app demo:


 # The server
* Open a terminal/CMD and go to "/server" dir

* Run `npm install` to install dependencies

* Change `/.env` db variables to match your database

* Run `npx prisma generate` in the terminal to generate prisma client

* Run `npx prisma migrate dev --preview-feature` to migrate the prisma schema to the db

* Run `npm start` to run the server

# NOTE:
after the server starts, there should be an output like this: `Server ready at http://localhost:4000/`, if the port is not 4000, enter react_login/src/.env and change `GRAPHQL_PORT` to the right value.

# The client

* Open react_login folder and `run npm install`

* Run `npm start` and wait for the webapp to load.
