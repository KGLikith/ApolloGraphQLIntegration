import { ApolloServer } from "@apollo/server";
import { post } from "./post/index.js";
import { user } from "./user/index.js";

const createApolloServer = async () => {
  const gqlServer = new ApolloServer({
    typeDefs: `
        ${user.typeDefs}
        ${post.typeDefs}
        type Query{
            ${user.queries}
            ${post.queries}
        }
        type Mutation{
            ${user.mutation}
            ${post.mutation}
        }
    `,
    resolvers: {
      Query: {
        ...user.resolvers.queries,
        ...post.resolvers.queries
      },
      Mutation: {
        ...user.resolvers.mutation,
        ...post.resolvers.mutation
      },
      Post:{
        ...post.resolvers.Post
      }
    },
  });

  await gqlServer.start();

  return gqlServer;
};

export default createApolloServer;
