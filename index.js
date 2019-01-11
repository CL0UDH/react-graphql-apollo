import express from 'express';
// graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express(); 

app.get('/', (req, res) => {
    res.send('Todo listo');
});

// resolver
const root = {hola: () => "Hola mundo desde graphQL"};

app.use('/graphql', graphqlHTTP({
    // que schema va a utilizar 
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => console.log('El servidor esta funcionando'));
