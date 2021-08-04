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
    hey: String
  }

  type Post {
    userId: ID
    id: ID
    title: String
    body: String
  }
  type PostComment {
    postId: ID
    id: ID
    name: String
    email: String
    body: String
  }

  type Query {
    books: [Book]
    feedAvailability: Feed
    get10Posts: [Post]
    getPostDetails(id: ID!): Post
    getPostComments(id: ID!): [PostComment]
  }
`;
