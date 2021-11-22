'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const apiSchema = require('./../test/mocks/api');
const operations = require('./mocks/operations/genres');

// const tester =
describe('Test Schema GraphQL - Genres', () => {
	let tester;
	before(function() {
		tester = new EasyGraphQLTester(apiSchema);
	});
	describe('Type Root: Query', () => {
		it("Llamada 'hello' válida", () => {
			const query = `
                {
                    hello
                }
            `;
			tester.test(true, query, {});
		});
		it("Llamada 'hello' inválida", () => {
			const query = `
                {
                    hello {
                        id
                        name
                    }
                }
            `;
			tester.test(false, query, {});
		});
		it("Llamada 'genresTV' válida", () => {
			const query = operations.GENRES_TV;
			tester.test(true, query, {});
		});
		it("Llamada 'genresTV' inválida", () => {
			const query = `
                {
                    genresTV
                }
            `;
			tester.test(false, query, {});
		});
		it("Llamada 'genresMovie' válida", () => {
			const query  = operations.GENRES_MOVIE;
			tester.test(true, query, {});
		});
		it("Llamada 'genresMovie' inválida", () => {
			const query = `
                {
                    genresMovie {
                        id
                        name
                        data
                    }
                }
            `;
			tester.test(false, query, {});
		});
	});
});