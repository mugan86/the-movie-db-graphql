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
const constants_1 = require("../../config/constants");
const queryGenreResolvers = {
    Query: {
        genresMovie: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.genre.list(constants_1.AUDIOVISUAL_TYPE.MOVIE);
        }),
        genresTV: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (dataSources.genre.list(constants_1.AUDIOVISUAL_TYPE.TV));
        }),
        hello: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const peoplePopular = yield dataSources.people.getPopular(1);
            console.log(peoplePopular);
            return "hello world";
        })
    }
};
exports.default = queryGenreResolvers;
