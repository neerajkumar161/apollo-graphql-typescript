import fetch from 'node-fetch';

export default {
  Query: {
    //5args
    feedAvailability: async (parent: any, args: any) => {
      const response = await fetch('https://wikimedia.org/api/rest_v1/feed/availability');
      const feeds = await response.json();
      return feeds;
    },
  },
};
