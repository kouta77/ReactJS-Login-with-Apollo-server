const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs} = require('./schema')

const port = process.env.PORT || 8080

const server = new ApolloServer({ typeDefs, resolvers,   formatError: (err) => {
  if (err.message.startsWith("Database Error: ")) {
      return new Error('Internal server error');
    }
    return err; 
    }
  }
  );

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });