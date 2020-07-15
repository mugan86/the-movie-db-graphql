"use strict";

const EasyGraphQLTester = require("easygraphql-tester");
const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");

const operations = require('./mocks/operations/discover');

const apiSchema = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./../src/schema/**/*.graphql"))
);

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
