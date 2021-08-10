import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express, { Application, NextFunction, Request, Response } from 'express';

import { resolvers, typeDefs, gatewaySchema } from './mergedDefsResolvers';
import dataloader from '../dataloader';

dataloader();   // N + 1 problem solution in GraphQL
const app: Application = express();
// const schema = makeExecutableSchema({ typeDefs, resolvers });

// Test Api - Convention should be /health
app.get('/health', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Server is running' });
});

// app.use('/myGraphql', graphqlHTTP({ schema, graphiql: true }));
const apolloServer = new ApolloServer({
  schema: gatewaySchema,
  // This context is universal to all resolvers, usage like for auth token
  context: () => ({
    contextObj: {
      name: 'Neeraj',
      lastName: 'Kumar',
      token: 'mysecrettoken',
    },
  }),
});

app.listen(4000, async () => {
  console.log('Server is listening on port 4000');
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
});
