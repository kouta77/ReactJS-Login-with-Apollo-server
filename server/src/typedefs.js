const { gql } = require('apollo-server')

const typedefs = gql`

    type Query {
        allUsers: [userdata],
        user(email: String!): userdata,
    }


    type Mutation {
        createUser(data: CreateUserInput): userdata!
        loginUser(email: String!, password: String!): userdata
    }

    type userdata {
        id: Int!
        username: String!
        email: String!
        password: String!
        avatar: String
    }

    input CreateUserInput {
        username: String!
        email: String!
        password: String!
        avatar: String
    }
`


module.exports = typedefs