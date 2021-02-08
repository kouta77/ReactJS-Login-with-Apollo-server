<h1> Enmanuel React Login App</h1>
features:

- Error tips
- cool design!
- password encryption
- user login
- user signup
- route protection
- graphql backend
- auth security


<h1> Steps to run this app demo:</h1>


 <h1> The server </h1>

* First, import mysql database

* Open 'server' folder and run npm install'

* Change .env 'DATABASE_URL' to your local mysql database

* Open a terminal windows in the server folder and run this comand npx prisma migrate dev --preview-feature to migrate the database from schema to mysql

* Run this command in the terminal (server folder) npx prisma generate
<h1>NOTE:</h1>
there should be an output like this: 'Server ready at http://localhost:4000/', if the port is not 4000, enter react_login(client)/src/backend/userMutations.js and change "GRAPTH_URL" to the right server value.

<h1> The client </h1>

* Open react_login folder and run npm install

* Run npm start and wait for the webapp to load.
