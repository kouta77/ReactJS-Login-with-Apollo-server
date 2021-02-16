import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

require('dotenv').config({path:'./.env'});


const GRAPTH_URL = process.env.REACT_APP_GRAPHQL_URL;

const httpLink = createHttpLink({
  uri: GRAPTH_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  console.log('tokun',token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: GRAPTH_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  
  <React.StrictMode>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
