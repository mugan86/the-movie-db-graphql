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
        hello: async(_, __, { dataSources}) => {
            const peoplePopular = await dataSources.people.getPopular(1);
            console.log(peoplePopular);
            return "hello world";
        }
    }
}

export default queryGenreResolvers;