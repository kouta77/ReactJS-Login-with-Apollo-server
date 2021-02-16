const { gql } = require('apollo-server')

const typedefs = gql `

    type Query {
        allUsers: [userdata],
        user(email: String!): userdata,
    }


    type Mutation {
        createUser(data: CreateUserInput): userdata!
        loginUser(email: String!, password: String!): loginData
    }

    type userdata {
        id: Int!
        username: String!
        email: String!
        password: String!
        avatar: String
    }

    type loginData {
        token: String!
        user: userdata
    }

    input CreateUserInput {
        username: String!
        email: String!
        password: String!
        avatar: String
    }
`


module.exports = typedefs