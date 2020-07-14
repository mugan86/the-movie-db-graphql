'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const resolvers = require('./mocks/resolvers/genres').resolverQueries;
const operations = require('./mocks/operations/genres');
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const genres = require('./mocks/data/genres');

const apiSchema = mergeTypeDefs(loadFilesSync(path.join(__dirname, './../src/schema/**/*.graphql')));
const expect = require('chai').expect;

function analyzeData (genresData) {
    expect(genresData).to.be.a('array');
    genresData.map((genre) => {
        expect(genre.id).to.be.a('number');
        expect(genre.name).to.be.a('string');
    });
}

describe('Testing Resolvers - Type Root - Query - Genres', () => {
	let tester;
	before(function() {
		tester = new EasyGraphQLTester(apiSchema, resolvers);
	});
	it("Comprobar que 'hello' devuelve correcto y es un string", async () => {
        const query = `
        { 
            hello 
        }`;
		const result = await tester.graphql(query, undefined, undefined, {});

        expect(result.data.hello).to.be.a('string');
        expect(result.data.hello).to.equal('hello world');
    });
    it("Comprobar que 'genresTV' devuelve correcto y es una lista", async () => {
        const query = operations.GENRES_TV;
		const result = await tester.graphql(query, undefined, undefined, {});
        analyzeData(result.data.genresTV);
    });
    it("Comprobar que 'genresMovie' devuelve correcto y es una lista", async () => {
        const query = operations.GENRES_MOVIE;
		const result = await tester.graphql(query, undefined, undefined, {});
        analyzeData(result.data.genresMovie);
    });
});