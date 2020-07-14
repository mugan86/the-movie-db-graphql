import { IResolvers } from "graphql-tools";
import { AUDIOVISUAL_TYPE } from "../../config/constants";

const queryDiscoverResolvers: IResolvers = { // FIXME: "Cannot read property 'list' of undefined",
    Query: {
        discoverMovie: async(_, __, { dataSources }) => {
            return await dataSources.discover.list(AUDIOVISUAL_TYPE.MOVIE);
        },
        discoverTv: async(_, __, { dataSources }) => {
            return await (dataSources.discover.list(AUDIOVISUAL_TYPE.TV));
        },
    }
}

export default queryDiscoverResolvers;