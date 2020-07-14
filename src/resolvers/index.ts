import { IResolvers } from "graphql-tools";
import query from "./query";
import type from "./type"
const resolvers : IResolvers = {
    ...query,
    ...type
}

export default resolvers;