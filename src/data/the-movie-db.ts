import { RESTDataSource } from "apollo-datasource-rest";

/**
 * All API documentation find: https://developers.themoviedb.org/3/getting-started/introduction
 */
export class TheMovieDB extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.themoviedb.org/3/";
    }
}