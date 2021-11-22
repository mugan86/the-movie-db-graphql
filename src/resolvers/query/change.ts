import { IResolvers } from 'apollo-server-express';

const queryChangeResolvers: IResolvers = {
  Query: {
    change: async (_, { type }, { dataSources }) => {
      return await dataSources.changes.list(type);
    },
  },
};

export default queryChangeResolvers;
