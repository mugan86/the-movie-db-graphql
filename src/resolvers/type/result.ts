import { IResolvers } from '@graphql-tools/utils';

const resolverTypes: IResolvers = {
  ResultPagination: {
    __resolveType(root: { page: number }) {
      if (root.page) {
        return 'ResultDiscover';
      }
      return null; // GraphQLError is thrown
    },
  },
};

export default resolverTypes;
