const { ApolloServer, AuthenticationError } = require('apollo-server')
const { resolvers, typeDefs } = require('./schema')
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 8080
const appSecret = process.env.APP_SECRET;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const authorization = req.headers.authorization || '';
        console.log('Logged TOKEN', authorization);
        return { authorization };
    },
    formatError: (err) => {
        if (err.message.startsWith("Database Error: ")) {
            return new Error('Internal server error');
        }
        return err;
    },
    cors: {
        credentials: true,
        origin: 'http://localhost:3000', // put your app origin, or * for all
    },
});

const getUser = token => {
    jwt.verify(token, appSecret, (err, dec) => {
        console.log('decoded jwt', dec);
    });
}


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log('database_url', process.env.DATABASE_URL)
    console.log(`Server ready at ${url}`);
});