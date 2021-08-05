import { githubUser } from '../helpers/getGithubUser';

type Args = {
  username: String;
};

export default {
  Query: {
    githubUser: (parent: any, args: Args) => {
      return githubUser(args.username);
    },
  },
};
