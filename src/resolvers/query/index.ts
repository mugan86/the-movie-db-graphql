import { IResolvers } from "graphql-tools";
import queryGenreResolvers from "./genre";

const queryResolvers: IResolvers = {
    ...queryGenreResolvers
}

export default queryResolvers;