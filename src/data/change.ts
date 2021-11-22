import { TheMovieDB } from './the-movie-db';

class Change extends TheMovieDB {
  async list(typeList: string) {
      console.log(`${typeList.toLowerCase()}/changes`);
    return await this.get(
      `${typeList.toLowerCase()}/changes`,
      {
        cacheOptions: { ttl: 60 },
      }
    ).then(
      (result: { results: object}) => {
        return result.results;
      }
    );
  }
}

export default Change;