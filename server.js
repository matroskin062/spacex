const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;
app.use(cors());

app.use('/graphiql', graphqlHTTP({ schema, graphiql: true }));

app.use(express.static('client/build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log('GraphQL server is running!!!')
);
