"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSources = void 0;
const people_1 = __importDefault(require("./people"));
const genre_1 = __importDefault(require("./genre"));
const discover_1 = __importDefault(require("./discover"));
exports.dataSources = {
    People: people_1.default,
    Genre: genre_1.default,
    Discover: discover_1.default
};
