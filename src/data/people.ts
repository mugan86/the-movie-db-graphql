import { TheMovieDB } from './the-movie-db';

class People extends TheMovieDB {
    async getPopular(page = 1, ) {
        return await this.get(`person/popular?page=${page}&language=${this.selectLanguage}`, {
            cacheOptions: { ttl: 60 }
        });
    }
}

export default People;