import React, { Component, Fragment } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importar componentes
import Header from "./componentes/Layout/header";
import Clientes from "./componentes/Clientes/Clientes";
import NuevoCliente from './componentes/Clientes/NuevoCliente';
import EditarCliente from './componentes/Clientes/EditarCliente';
import NuevoProducto from './componentes/Productos/NuevoProducto';
import Productos from './componentes/Productos/Productos';
import EditarProducto from './componentes/Productos/EditarProducto';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes}/>
                <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
                <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
                <Route exact path="/producto/nuevo" component={NuevoProducto}/>
                <Route exact path="/productos" component={Productos}/>
                <Route exact path="/productos/editar/:id" component={EditarProducto}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
// TODO: Continuar en la seccion 21: 106 Eliminando los productos