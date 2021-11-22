import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { LANGUAGES } from '../config/constants';

/**
 * All API documentation find: https://developers.themoviedb.org/3/getting-started/introduction
 */
export class TheMovieDB extends RESTDataSource {
    selectLanguage: string;
    constructor(selectLanguage: string = LANGUAGES.SPANISH) {
        super();
        this.baseURL = 'https://api.themoviedb.org/3/';
        this.selectLanguage = selectLanguage;
    }

    willSendRequest(request: RequestOptions) {
        request.params.set('api_key', process.env.API_KEY || '');
    }
}