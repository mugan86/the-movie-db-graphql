"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("graphql-import-node");
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = __importDefault(require("./../resolvers"));
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const typeDefs = merge_1.mergeTypeDefs(load_files_1.loadFilesSync(`${__dirname}/**/*.graphql`));
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: resolvers_1.default,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
});
exports.default = schema;
