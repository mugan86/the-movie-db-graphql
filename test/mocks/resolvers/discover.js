const DATA = require('./../data/discover');
const discoverTv = () => DATA.DISCOVER_TV_LIST;
const discoverMovie = () => DATA.DISCOVER_MOVIE_LIST;

const resolverQueries = {
    Query: {
        discoverTv,
        discoverMovie
    }
}

module.exports = {
    resolverQueries
}