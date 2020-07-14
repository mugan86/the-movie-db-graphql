import { TheMovieDB } from "./the-movie-db";

class Discover extends TheMovieDB {
    async list(typeList: string) {
        return await this.get(`discover/${typeList}?language=${this.selectLanguage}`, {
            cacheOptions: { ttl: 60 }
        });
    }
}

export default Discover;