import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { PRODUCTO_QUERY } from '../../queries/index';
import { ACTUALIZAR_PRODUCTO } from '../../mutations/index';
import FormularioEditarProducto from './FormularioEditarProducto';

class EditarProducto extends Component {
    state = {

    }

    render(){
        // Tomar el ID para editar
        const {id} = this.props.match.params;
        return(
            <Fragment>
               <h2 className="text-center">Editar Producto</h2>

               <div className="row justify-content-center">
                   <Query query={PRODUCTO_QUERY} variables={{ id }} refetchQueries={ACTUALIZAR_PRODUCTO}>
                       {
                           ({ loading, error, data, refetch }) => {
                               if(loading) return 'Cargando...';
                               if(error) return `Error! ${error.message}`;
                               console.log(data);
                               
                               return (
                                   <FormularioEditarProducto
                                        producto={data}
                                        id={id}
                                        refetch={refetch}
                                   />
                               );
                           }
                       }
                   </Query>
               </div>
            </Fragment>
        )
    }
}

export default EditarProducto;
