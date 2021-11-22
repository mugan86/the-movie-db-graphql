"use strict";

const EasyGraphQLTester = require("easygraphql-tester");
const operations = require('./mocks/operations/certification');
const apiSchema = require('./../test/mocks/api');

// const tester =
describe("Test Schema GraphQL - Certification", () => {
  let tester;
  before(function () {
    tester = new EasyGraphQLTester(apiSchema);
  });
  describe("Type Root: Query", () => {
    it("Llamada 'certificationMovie' válida", () => {
      const query = operations.CERTIFICATION_MOVIES;
      tester.test(true, query, {});
    });
    it("Llamada 'certificationMovie' inválida", () => {
      const query = `
                {
                    {
                        certificationMovie {
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
    it("Llamada 'certificationTv' válida", () => {
      const query = operations.CERTIFICATION_TV;
      tester.test(true, query, {});
    });
    it("Llamada 'certificationTv' inválida", () => {
        const query = `
        {
            certificationTv {
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
