import { TheMovieDB } from "./the-movie-db";
import { AUDIOVISUAL_TYPE } from "../config/constants";

class Certification extends TheMovieDB {
  async list(typeList: string) {
    return await this.get(
      `certification/${typeList}/list`,
      {
        cacheOptions: { ttl: 60 },
      }
      /**
       * type Certification {
    "Código del páis"
    code: String!
    details: CertificationDetails
}

type CertificationDetails {
    "Tipo de certificado"
    certification: String!
    "descripción"
    meaning: String!
    order: Int!
}
       */
    ).then(
      (result: { certifications: object}) => {
          // console.log(result.certifications);
          // console.log(Object.keys(result.certifications).values()); 
        /*return {
          /*page: result.page,
          totalResults: result.total_results,
          totalPages: result.total_pages,
          movies:
            typeList === AUDIOVISUAL_TYPE.MOVIE ? result.results : undefined,
          tvShows:
            typeList === AUDIOVISUAL_TYPE.TV ? result.results : undefined,
        };*/
        return result.certifications
      }
    );
  }
}

export default Certification;
