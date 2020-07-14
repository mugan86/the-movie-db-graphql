"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genre_1 = __importDefault(require("./genre"));
const discover_1 = __importDefault(require("./discover"));
const queryResolvers = Object.assign(Object.assign({}, genre_1.default), discover_1.default);
exports.default = queryResolvers;
