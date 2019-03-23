import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import { Link } from 'react-router-dom';

import { CLIENTES_QUERY } from "../queries/index";
import { ELIMINAR_CLIENTE } from '../mutations';

class Clientes extends Component {

    state = {
        paginator: {
            offset: 0,
            actual: 1
        }
    }

    render() {
        return(
            <Query query={CLIENTES_QUERY} pollInterval={1000}>
                {({ loading, error, data, startPolling, stopPolling }) => {
                    if (loading) return "Cargando...";
                    if (error) return `Error: ${error}`;

                    console.log(data);

                    return (
                        <Fragment>
                            <h2 className="text-center">Listado de Clientes</h2>
                            <ul className="list-group">
                                {data.getClientes.map(item => {
                                    const { id } = item;
                                    return (
                                        <li key={item.id} className="list-group-item">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-md-8 d-flex justify-content-between align-items-center">
                                                    {item.nombre} {item.apellido} - {item.empresa}
                                                </div>
                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <Link to={`/cliente/editar/${item.id}`} className="btn btn-success d-block d-md-inline-block">
                                                        Editar Cliente
                                            </Link>
                                                    <Mutation mutation={ELIMINAR_CLIENTE}>
                                                        {
                                                            eliminarCliente => (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger d-block d-md-inline-block ml-2"
                                                                    onClick={() => {
                                                                        if (window.confirm('Seguro que deseas eliminar este cliente?')) {
                                                                            eliminarCliente({
                                                                                variables: { id }
                                                                            })
                                                                        }
                                                                    }
                                                                    }
                                                                >
                                                                    &times; Eliminar
                                                        </button>
                                                            )
                                                        }
                                                    </Mutation>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Fragment>
                    )
                }}
            </Query>
        )
    }
}

export default Clientes;