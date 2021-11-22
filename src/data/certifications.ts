import { TheMovieDB } from './the-movie-db';

class Certification extends TheMovieDB {
  async list(typeList: string) {
    return await this.get(
      `certification/${typeList}/list`,
      {
        cacheOptions: { ttl: 60 },
      }
    ).then(
      (result: { certifications: object}) => {
        return result.certifications;
      }
    );
  }
}

export default Certification;
