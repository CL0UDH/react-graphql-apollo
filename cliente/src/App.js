import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1>Hola mundo</h1>
      </ApolloProvider>
    );
  }
}

export default App;
// TODO: Continuar en la seccion 11: Creando la aplicacion CRM - 51. Primeros pasos con la aplicación