import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { PRODUCTOS_QUERY } from '../../queries/index';

class Productos extends Component {
    state = {

    }

    render(){
        return(
            <Fragment>
                <h1 className="text-center mb-5">Listado de Productos</h1>

                <Query
                    query={PRODUCTOS_QUERY}
                    pollInterval={1000}
                >
                    {
                        ({loading, error, data, startPolling, stopPolling}) => {
                            if (loading) return "Cargando...";
                            if (error) return `Error: ${error.message}`;
                            console.log(data.getProductos);
                            
                            return (
                                <table className="table">
                                    <thead>
                                        <tr className="table-primary">
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Existencia</th>
                                            <th scope="col">Editar</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            data.getProductos.map(item => {
                                                
                                            })
                                        }
                                    </tbody>
                                </table>
                            )
                        }
                    }
                </Query>
            </Fragment>
        );
    }
}

export default Productos;