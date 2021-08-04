import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { graphqlHTTP } from 'express-graphql';
import { ApolloServer } from 'apollo-server-express';
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'This is test page' });
});

// app.use('/myGraphql', graphqlHTTP({ schema, graphiql: true }));

// const apolloServer = new ApolloServer({ schema });
const apolloServer = new ApolloServer({ resolvers, typeDefs });

app.listen(4000, async () => {
  console.log('Server is listening on port 4000');
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
});
