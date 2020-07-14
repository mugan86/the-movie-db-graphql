"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const the_movie_db_1 = require("./the-movie-db");
class People extends the_movie_db_1.TheMovieDB {
    getPopular(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`person/popular?page=${page}&language=${this.selectLanguage}`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
}
exports.default = People;
