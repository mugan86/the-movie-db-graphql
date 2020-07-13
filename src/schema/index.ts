import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import resolvers from "./../resolvers";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
const typeDefs = mergeTypeDefs(loadFilesSync(`${__dirname}/**/*.graphql`));// Y quitamos

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
});

export default schema;