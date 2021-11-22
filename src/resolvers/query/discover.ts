import { IResolvers } from 'apollo-server-express';
import { AUDIOVISUAL_TYPE } from '../../config/constants';

const queryDiscoverResolvers: IResolvers = {
    Query: {
        discoverMovie: async(_, {page, primaryYear}, { dataSources }) => {
            return await dataSources.discover.list(AUDIOVISUAL_TYPE.MOVIE, page, primaryYear);
        },
        discoverTv: async(_, {page, primaryYear}, { dataSources }) => {
            return await (dataSources.discover.list(AUDIOVISUAL_TYPE.TV, page, primaryYear));
        },
    }
}

export default queryDiscoverResolvers;
