import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
require('dotenv').config({path:'./.env'});


const GRAPTH_URL = process.env.REACT_APP_GRAPHQL_URL;

const client = new ApolloClient({
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
