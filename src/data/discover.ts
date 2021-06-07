import { TheMovieDB } from "./the-movie-db";
import { AUDIOVISUAL_TYPE } from "../config/constants";

class Discover extends TheMovieDB {
  async list(typeList: string, page = 1) {
    return await this.get(
      `discover/${typeList}?language=${this.selectLanguage}&page=${page}`,
      {
        cacheOptions: { ttl: 60 },
      }
    ).then(
      (result: {
        results: Array<object>;
        page: number;
        total_results: number;
        total_pages: number;
      }) => {
        return {
          page: result.page,
          totalResults: result.total_results,
          totalPages: result.total_pages,
          movies:
            typeList === AUDIOVISUAL_TYPE.MOVIE ? result.results : undefined,
          tvShows:
            typeList === AUDIOVISUAL_TYPE.TV ? result.results : undefined,
        };
      }
    );
  }
}

export default Discover;
