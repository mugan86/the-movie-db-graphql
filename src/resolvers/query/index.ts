import { IResolvers } from "graphql-tools";
import queryGenreResolvers from "./genre";
import queryDiscoverResolvers from "./discover";

const queryResolvers: IResolvers = {
    ...queryGenreResolvers,
    ...queryDiscoverResolvers
}

export default queryResolvers;