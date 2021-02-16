import React from 'react';
import {gql} from '@apollo/client';

const GRAPTH_URL = process.env.REACT_APP_GRAPHQL_URL;

const REGISTER_USER = gql`
mutation CreateUser($username:String!, $email:String!, $password:String!, $avatar:String){
      createUser(data:{username:$username, email:$email,password:$password, avatar:$avatar}){
      username
      email
      avatar
      }
    }
`;

const LOGIN_USER = gql`
      mutation 
        loginUser($email:String!, $password:String!){
            loginUser(email:$email, password:$password){
              token
              user {
                id
                username
                email
                avatar
              }
          }
        }
    `


export {
    REGISTER_USER,
    LOGIN_USER
};