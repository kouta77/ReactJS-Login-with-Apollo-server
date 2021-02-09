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

* Open 'server' folder and `run npm install`

* Change .env `DATABASE_URL` to your local mysql database

* Run this command in the terminal (server folder) `npx prisma generate`

* Open a terminal windows in the server folder and run this comand `npx prisma migrate dev --preview-feature` to migrate the model from schema to the db

# NOTE:
there should be an output like this: `Server ready at http://localhost:4000/`, if the port is not 4000, enter react_login(client)/src/backend/userMutations.js and change `GRAPTH_URL` to the right port value.

# The client

* Open react_login folder and `run npm install`

* Run `npm start` and wait for the webapp to load.
