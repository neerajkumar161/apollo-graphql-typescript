import { PostComment } from '../interface/interface';
import fetch from 'node-fetch';

export default {
  Query: {
    getPostComments: async (parent: any, args: any) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}/comments`);
      const postComments: PostComment = await response.json();
      return postComments;
    },
  },
};
