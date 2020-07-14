import queryGenreResolvers from "./genre";
import queryDiscoverResolvers from "./discover";
import GMR from "graphql-merge-resolvers";


const queryResolvers = GMR.merge(
    [
        queryGenreResolvers,
        queryDiscoverResolvers
    ]
);

export default queryResolvers;