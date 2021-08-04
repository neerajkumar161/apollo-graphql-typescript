import { graphqlHTTP } from 'express-graphql';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import express, { Application, NextFunction, Request, Response } from 'express';

import { feeds } from '../dummyData';

const app: Application = express();

const FeedType = new GraphQLObjectType({
  name: 'Feeds',
  fields: () => ({
    todays_featured_article: { type: new GraphQLList(GraphQLString) },
    most_read: { type: new GraphQLList(GraphQLString) },
    picture_of_the_day: { type: new GraphQLList(GraphQLString) },
    in_the_news: { type: new GraphQLList(GraphQLString) },
    on_this_day: { type: new GraphQLList(GraphQLString) },
  }),
});

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    feedAvailability: {
      type: FeedType,
      // args: { id: { type: GraphQLString } },
      resolve: () => feeds,
    },
  },
});

const schema = new GraphQLSchema({ query });

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'This is test page' });
});

app.use('/myGraphql', graphqlHTTP({ schema, graphiql: true }));

// const apolloServer = new ApolloServer({ schema });
const apolloServer = new ApolloServer({ schema });

app.listen(4000, async () => {
  console.log('Server is listening on port 4000');
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
});
