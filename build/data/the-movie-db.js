"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheMovieDB = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const constants_1 = require("../config/constants");
class TheMovieDB extends apollo_datasource_rest_1.RESTDataSource {
    constructor(selectLanguage = constants_1.LANGUAGES.SPANISH) {
        super();
        this.baseURL = "https://api.themoviedb.org/3/";
        this.selectLanguage = selectLanguage;
    }
    willSendRequest(request) {
        request.params.set("api_key", process.env.API_KEY || "");
    }
}
exports.TheMovieDB = TheMovieDB;
