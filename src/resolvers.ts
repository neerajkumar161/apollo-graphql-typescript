import fetch from 'node-fetch';
import { Post, PostComment } from './interface';

export const resolvers = {
  Query: {
    feedAvailability: async (parent: any, args: any) => {
      let feeds = await fetch('https://wikimedia.org/api/rest_v1/feed/availability');
      feeds = await feeds.json();
      console.log(feeds);
      return feeds;
    },
    get10Posts: async (parent: any, args: any) => {
      let result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let postComments: Array<Post> = await result.json();
      return postComments.slice(0, 9);
    },
    getPostDetails: async (parent: any, args: any) => {
      let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}`);
      let postComments: Post = await result.json();
      return postComments;
    },
    getPostComments: async (parent: any, args: any) => {
      let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}/comments`);
      let postComments: PostComment = await result.json();
      return postComments;
    },
  },
};
