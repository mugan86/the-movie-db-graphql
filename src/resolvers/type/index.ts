import GMR from "graphql-merge-resolvers";
import typeMovieResolvers from "./movie";
import typeTvResolvers from "./tv";
import typeResultCertificationResolvers from "./result-certification";


const typeObjectResolvers = GMR.merge(
    [
        typeMovieResolvers,
        typeTvResolvers,
        typeResultCertificationResolvers
    ]
);

export default typeObjectResolvers;