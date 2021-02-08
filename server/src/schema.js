const userQueries = require('./resolvers/queries/User')
const userMutations = require('./resolvers/mutations/User')
const typeDefs = require('./typedefs')


const resolvers = {
    Query: {
        ...userQueries
    },
    Mutation: {
        ...userMutations
    }
}

module.exports = {
    resolvers,
    typeDefs
}