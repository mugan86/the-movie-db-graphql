import { IResolvers } from 'apollo-server-express';

const typeMovieResolvers: IResolvers = {
  Movie: {
    originalLanguage: (parent) => parent.original_language,
    genreIds: (parent) => parent.genre_ids,
    voteCount: (parent) => parent.vote_count,
    backdropPath: (parent) => parent.backdrop_path,
    voteAverage: (parent) => parent.vote_average,
    posterPath: (parent) => parent.poster_path,
  },
};

export default typeMovieResolvers;
