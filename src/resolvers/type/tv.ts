import { IResolvers } from "graphql-tools";

const typeTvResolvers: IResolvers =  {
    Tv: {
        originalName: (parent) => parent.original_name,
        originCountry: (parent) => parent.origin_country,
        originalLanguage: (parent) => parent.original_language,
        genreIds: (parent) => parent.genre_ids,
        voteCount: (parent) => parent.vote_count,
        firstAirDate: (parent) => parent.first_air_date,
        backdropPath: (parent) => parent.backdrop_path,
        voteAverage: (parent) => parent.vote_average,
        posterPath: (parent) => parent.poster_path,
    }
}

export default typeTvResolvers