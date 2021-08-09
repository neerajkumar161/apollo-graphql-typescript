import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { introspectSchema } from '@graphql-tools/wrap';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchSchemas } from '@graphql-tools/stitch';
import path from 'path';
import PostsResolvers from './resolvers/posts';
import FeedResolver from './resolvers/feedsAvailabilty';
import GitHubResolver from './resolvers/getGithubUser';

const typesArray = loadFilesSync(path.join(__dirname, './schema'), { extensions: ['.graphql'] });
const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));

export const typeDefs = mergeTypeDefs(typesArray);
export const resolvers = mergeResolvers(resolversArray);

const postDef = loadFilesSync(path.join(__dirname, './schema/posts.graphql'));
const feedDef = loadFilesSync(path.join(__dirname, './schema/feed.graphql'));
const gitHubDef = loadFilesSync(path.join(__dirname, './schema/githubUser.graphql'));

const postSchema = makeExecutableSchema({ typeDefs: postDef, resolvers: PostsResolvers });
const feedSchema = makeExecutableSchema({ typeDefs: feedDef, resolvers: FeedResolver });
const gitHubSchema = makeExecutableSchema({ typeDefs: gitHubDef, resolvers: GitHubResolver });

// build the combined schema
export const gatewaySchema = stitchSchemas({
  subschemas: [postSchema, feedSchema, gitHubSchema],
});

const remoteExecutor = (args: any, variables: any) => {
  console.log({ args });
  console.log({ variables });
  return {
    name: 'Neeraj Kumar',
    function: 'Remote Executor',
  };
};
