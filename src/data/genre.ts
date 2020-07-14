import { TheMovieDB } from "./the-movie-db";

class Genre extends TheMovieDB {
    async list(typeList: string) {
        return await this.get(`genre/${typeList}/list?language=${this.selectLanguage}`, {
            cacheOptions: { ttl: 60 }
        }).then((result: {genres: Array<object>}) => {
            return result.genres
        });
    }
}

export default Genre;