"use strict";

const EasyGraphQLTester = require("easygraphql-tester");
const operations = require('./mocks/operations/discover');
const apiSchema = require('./../test/mocks/api');

// const tester =
describe("Test Schema GraphQL - Discover", () => {
  let tester;
  before(function () {
    tester = new EasyGraphQLTester(apiSchema);
  });
  describe("Type Root: Query", () => {
    it("Llamada 'discoverMovie' válida", () => {
      const query = operations.DISCOVER_MOVIE;
      tester.test(true, query, {});
    });
    it("Llamada 'discoverMovie' inválida", () => {
      const query = `
                {
                    {
                        discoverMovie {
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
      tester.test(false, query, {});
    });
    it("Llamada 'discoverTv' válida", () => {
      const query = operations.DISCOVER_TV;
      tester.test(true, query, {});
    });
    it("Llamada 'discoverTv' inválida", () => {
        const query = `
        {
            discoverTv {
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
            `;
      tester.test(false, query, {});
    });
  });
});
