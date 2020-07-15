'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const resolvers = require('./mocks/resolvers/discover').resolverQueries;
const operations = require('./mocks/operations/discover');
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const discover = require('./mocks/data/discover');

const apiSchema = mergeTypeDefs(loadFilesSync(path.join(__dirname, './../src/schema/**/*.graphql')));
const expect = require('chai').expect;

function analyzeData (discoverData, tv) {
    if (tv) {
        expect(discoverData.tvShows).to.be.a('array');
    } else {
        expect(discoverData.movies).to.be.a('array');
    }
    expect(discoverData.page).to.be.a('number');
    expect(discoverData.totalResults).to.be.a('number');
    expect(discoverData.totalPages).to.be.a('number');
    
}

describe('Testing Resolvers - Type Root - Query - Genres', () => {
	let tester;
	before(function() {
		tester = new EasyGraphQLTester(apiSchema, resolvers);
	});
    it("Comprobar que 'discoverTV' devuelve correcto, tiene propiedades de paginación y obtiene lista", async () => {
        const query = operations.DISCOVER_TV;
		const result = await tester.graphql(query, undefined, undefined, {});
        analyzeData(result.data.discoverTv, true);
    });
    it("Comprobar que 'discoverMovie' devuelve correcto, tiene propiedades de paginación y obtiene lista", async () => {
        const query = operations.DISCOVER_MOVIE;
		const result = await tester.graphql(query, undefined, undefined, {});
        analyzeData(result.data.discoverMovie, false);
    });
});