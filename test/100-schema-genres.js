'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const apiSchema = mergeTypeDefs(loadFilesSync(path.join(__dirname, './../src/schema/**/*.graphql')));

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
			const query = `
                {
                    genresTV {
                        id
                        name
                    }
                }
            `;
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
			const query = `
                {
                    genresMovie {
                        id
                        name
                    }
                }
            `;
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