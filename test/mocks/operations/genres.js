const QUERIES_GENRES = {
    GENRES_MOVIE: `{ 
        genresMovie {
            id
            name
        } 
    }`,
    GENRES_TV: `{ 
        genresTV {
            id
            name
        } 
    }`,
};

module.exports = QUERIES_GENRES;