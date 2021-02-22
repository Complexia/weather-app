import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import SearchHistory from './components/SearchHistory';
import ResultBox from './components/ResultBox';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { useGetUsersQuery, useGetPostsQuery } from './generated/graphql';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';


let uri = "https://48p1r2roz4.sse.codesandbox.io"
let uriLocal = "http://localhost:4000/graphql"
let uriRemote = "http://18.216.99.246:8080/graphql"
const client = new ApolloClient({
  uri: uriRemote,
  cache: new InMemoryCache()
});



function App() {

  // client
  // .query({
  //   query: gql`
  //     query {
  //       getAllUsers {
  //         username
          
  //       }
  //     }
  //   `
  // })
  
  // .then((result) => console.log(JSON.stringify(result)))

  
  
 
  
  return (
    <ApolloProvider client={client}>

      <Switch>

        <Route path="/" component={ Home } exact />
        <Route path="/register" component={ Register }/>
        <Route path="/login" component={ Login }/>

      </Switch>
    </ApolloProvider>
    
  );
}

export default App;
