import queryGenreResolvers from "./genre";
import queryDiscoverResolvers from "./discover";
import GMR from "graphql-merge-resolvers";
import queryCertificationResolvers from "./certification";

const queryResolvers = GMR.merge(
    [
        queryGenreResolvers,
        queryDiscoverResolvers,
        queryCertificationResolvers
    ]
);

export default queryResolvers;