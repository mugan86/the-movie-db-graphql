import { IResolvers } from "graphql-tools";
import { AUDIOVISUAL_TYPE } from "../../config/constants";

const queryDiscoverResolvers: IResolvers = {
    Query: {
        discoverMovie: async(_, {page}, { dataSources }) => {
            return await dataSources.discover.list(AUDIOVISUAL_TYPE.MOVIE, page);
        },
        discoverTv: async(_, {page}, { dataSources }) => {
            return await (dataSources.discover.list(AUDIOVISUAL_TYPE.TV, page));
        },
    }
}

export default queryDiscoverResolvers;