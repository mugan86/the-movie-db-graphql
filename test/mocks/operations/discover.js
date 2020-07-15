const DISCOVER_TV = `
{
    discoverTv {
        page
        totalPages
        totalResults
        tvShows {
            id
            originalName
            originCountry
            originalLanguage
            genreIds
            name
            popularity
            voteCount
            firstAirDate
            backdropPath
            voteAverage
            posterPath
            overview
        }
    }
}
    `;
const DISCOVER_MOVIE = `{
    discoverMovie {
      page
      totalPages
      totalResults
      movies {
        id
        originalLanguage
        genreIds
        title
        popularity
        video
        adult
        voteCount
        backdropPath
        voteAverage
        posterPath
        overview
        releaseDate
      }
    }
  }   
`;

module.exports = {
    DISCOVER_TV,
    DISCOVER_MOVIE
}