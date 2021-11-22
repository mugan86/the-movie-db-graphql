import { IResolvers } from 'apollo-server-express';
import { AUDIOVISUAL_TYPE } from '../../config/constants';

const queryDiscoverResolvers: IResolvers = {
  Query: {
    discoverMovie: async (_, __, { dataSources }) => {
      return await dataSources.discover.list(AUDIOVISUAL_TYPE.MOVIE);
    },
    discoverTv: async (_, __, { dataSources }) => {
      return await dataSources.discover.list(AUDIOVISUAL_TYPE.TV);
    },
  },
};

export default queryDiscoverResolvers;
