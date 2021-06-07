import { IResolvers } from "graphql-tools";
import { IMAGE_PATH } from "../../config/constants";

const typeMovieResolvers: IResolvers =  {
    Movie: {
        originalLanguage: (parent) => parent.original_language,
        genreIds: (parent) => parent.genre_ids,
        voteCount: (parent) => parent.vote_count,
        backdropPath: (parent) => parent.backdrop_path,
        voteAverage: (parent) => parent.vote_average,
        posterPath: (parent) => IMAGE_PATH(parent.poster_path),
        releaseDate: (parent) => parent.release_date
    }
}

export default typeMovieResolvers