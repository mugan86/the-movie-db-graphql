import { IResolvers } from "graphql-tools";
import { AUDIOVISUAL_TYPE } from "../../config/constants";

const queryCertificationResolvers: IResolvers = {
    Query: {
        certificationMovie: async(_, __, { dataSources }) => {
            return await dataSources.certification.list(AUDIOVISUAL_TYPE.MOVIE);
        },
        certificationTv: async(_, __, { dataSources }) => {
            return await (dataSources.certification.list(AUDIOVISUAL_TYPE.TV));
        },
    }
}

export default queryCertificationResolvers;