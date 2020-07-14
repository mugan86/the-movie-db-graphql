import { IResolvers } from "graphql-tools";
import { AUDIOVISUAL_TYPE } from "../../config/constants";

const queryGenreResolvers: IResolvers = {
    Query: {
        genresMovie: async(_, __, { dataSources}) => {
            return await dataSources.genre.list(AUDIOVISUAL_TYPE.MOVIE);
        },
        genresTV: async(_, __, { dataSources}) => {
            return await (dataSources.genre.list(AUDIOVISUAL_TYPE.TV));
        },
        hello: () => "hello world"
    }
}

export default queryGenreResolvers;