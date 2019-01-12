import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }
    type Email {
        email: String
    }
    type Pedido {
        producto: String
        precio: Int
    }
    enum TipoCliente {
        BASICO
        PREMIUM
    }
    type Query {
        getCliente(id: ID): Cliente
    }
    input EmailInput {
        email: String
    }
    input PedidoInput {
        producto: String
        precio: Int
    }
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        emails: [EmailInput]
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }
    type Mutation {
        crearCliente(input: ClienteInput): Cliente
    }
`);

export default schema;