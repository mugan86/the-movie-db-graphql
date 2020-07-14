import GMR from "graphql-merge-resolvers";
import typeMovieResolvers from "./movie";
import typeTvResolvers from "./tv";


const typeObjectResolvers = GMR.merge(
    [
        typeMovieResolvers,
        typeTvResolvers
    ]
);

export default typeObjectResolvers;