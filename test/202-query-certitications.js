'use strict';

const EasyGraphQLTester = require('easygraphql-tester');
const resolvers = require('./mocks/resolvers/certification').resolverQueries;
const operations = require('./mocks/operations/certification');
const apiSchema = require('./../test/mocks/api');
const expect = require('chai').expect;

const analyzeData = (certificationData) => {
    expect(certificationData.certifications).to.be.a('array');
}

describe('Testing Resolvers - Type Root - Query - Certification', () => {
	let tester;
	before(function() {
		tester = new EasyGraphQLTester(apiSchema, resolvers);
	});
    it("Comprobar que 'certificationTV' devuelve correcto", async () => {
        const query = operations.CERTIFICATION_TV;
        const result = await tester.graphql(query, undefined, undefined, {});
        analyzeData(result.data.certificationTv);
    });
    it("Comprobar que 'certificationMovie' devuelve correcto", async () => {
        const query = operations.CERTIFICATION_MOVIES;
		const result = await tester.graphql(query, undefined, undefined, {});
        analyzeData(result.data.certificationMovie);
    });
});