import { Context, Post, PostComment } from '../interface/interface';
import fetch from 'node-fetch';

export default {
  Query: {
    get10Posts: async (parent?: any, args?: any, context?: Context) => {
      console.log('Get 10 Post Resolver');
      // console.log(context.contextObj.token);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const posts: Array<Post> = await response.json();
      return posts.slice(0, 10);
    },
    postInfo: async (parent: any, args: any) => {
      console.log('im here');
      return { id: args.id }; // basically object is passed to PostInfo - resolver object
    },
  },
  // This is resolvers chaining
  PostInfo: {
    postDetails: async (parent: any, args?: any, context?: Context) => {
      // console.log(context.contextObj.token);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${parent.id}`);
      const post: Post = await response.json();
      console.log(post);
      return post;
    },
    postComments: async (parent: any) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${parent.id}/comments`);
      const postComments: PostComment = await response.json();
      return postComments;
    },
  },
};
