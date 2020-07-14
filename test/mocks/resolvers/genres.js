const _ = require('lodash');
const DATA = require('./../data/genres').GENRES_TV_MOVIE_LIST;
const genresTV = () => DATA;
const genresMovie = () => DATA
const hello = () => "hello world"

const resolverQueries = {
    Query: {
        hello,
        genresTV,
        genresMovie
    }
}

module.exports = {
    resolverQueries
}