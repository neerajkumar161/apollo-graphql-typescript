import { buildSchema } from 'graphql';
import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Feed {
    todays_featured_article: [String]
    most_read: [String]
    picture_of_the_day: [String]
    in_the_news: [String]
    on_this_day: [String]
  }

  type Query {
    books: [Book]
    feedAvailability: Feed
  }
`;

export const graphqlSchema = buildSchema(`
type Book {
    title: String
    author: String
  }

  type Feed {
    todays_featured_article: [String]
    most_read: [String]
    picture_of_the_day: [String]
    in_the_news: [String]
    on_this_day: [String]
  }

  type Query {
    books: [Book]
    feedAvailability: Feed
  }`);
