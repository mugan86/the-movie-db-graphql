import { IResolvers } from "graphql-tools";

const queryResolvers: IResolvers = {
    Query: {
        hello: async(_, __, { dataSources}) => {
            const peoplePopular = await dataSources.people.getPopular(1);
            console.log(peoplePopular);
            return "hello world";
        }
    }
}

export default queryResolvers;