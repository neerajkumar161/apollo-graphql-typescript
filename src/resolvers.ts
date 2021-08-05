import fetch from 'node-fetch';
import { Post, PostComment } from './interface/interface';

//nested resolvers

//Schema -> combination of typeDefs and resolvers
//typeDefs -> .graphqlHTTP
//merge typedefs -> mergeTypes
//resolvers
//-> implement logic for fetching data


export const feedResolvers = {
  Query: {
    //5args
    feedAvailability: async (parent: any, args: any) => {
      let feeds = await fetch('https://wikimedia.org/api/rest_v1/feed/availability');
      feeds = await feeds.json();
      console.log(feeds);
      return feeds;
    },
  },
};

export const postResolver = {
  Query: {
    //proper variable naming
    get10Posts: async (parent: any, args: Args) => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let posts: Array<Post> = await response.json();

      return posts.slice(0, 9);
    },
    getPostDetails: async (parent: any, args: any) => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}`);
      let post: Post = await response.json();
      return post;
    },
  },
};

export const commentResolver = {
  Query: {
    getPostComments: async (parent: any, args: any) => {
      let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}/comments`);
      let postComments: PostComment = await result.json();
      return postComments;
    },
  },
};
