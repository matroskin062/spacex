import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';

const client = new ApolloClient({
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

