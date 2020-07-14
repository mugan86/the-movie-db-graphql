"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const environments = dotenv_1.default.config({ path: "./src/.env" });
if (process.env.NODE_ENV !== "production") {
    if (environments.error) {
        throw environments.error;
    }
}
exports.default = environments;
