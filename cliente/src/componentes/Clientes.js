import React from "react";
import { Query } from "react-apollo";

import { CLIENTES_QUERY } from "../queries/index";

const Conctactos = () => (
    <Query query={CLIENTES_QUERY}>
        {({ loading, error, data}) => {
            if(loading) return "Cargando...";
            if(error) return `Error: ${error}`;

            console.log(data);
            
            return (
                <h2 className="text-center">Listado de Clientes</h2>
            )
        }}
    </Query>
)

export default Conctactos;