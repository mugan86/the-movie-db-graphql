import { IResolvers } from "graphql-tools";

const queryResolvers: IResolvers = {
    Query: {
        hello: "hello world"
    }
}

export default queryResolvers;