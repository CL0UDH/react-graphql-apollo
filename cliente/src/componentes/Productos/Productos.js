import React, { Component, Fragment } from 'react';
import { Query, Mutation} from 'react-apollo';
import { PRODUCTOS_QUERY } from '../../queries/index';
import { ELIMINAR_PRODUCTO } from '../../mutations/index';
import { Link } from 'react-router-dom';

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
                                                const {id} = item;

                                                return (
                                                    <tr key={id}>
                                                        <td>{item.nombre}</td>
                                                        <td>{item.precio}</td>
                                                        <td>{item.stock}</td>
                                                        <td>
                                                            <Link 
                                                                to={`/productos/editar/${id}`}
                                                                className="btn btn-success"
                                                            >
                                                                Editar Producto
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Mutation mutation={ELIMINAR_PRODUCTO}>
                                                                {
                                                                    eliminarProducto => (
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-danger"
                                                                            onClick={
                                                                                () => {
                                                                                    if(window.confirm('¿Seguro que deseas eliminar este producto?')){
                                                                                        eliminarProducto({
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
                                                        </td>
                                                    </tr>
                                                );
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