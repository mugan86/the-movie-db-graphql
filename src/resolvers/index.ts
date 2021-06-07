import path from "path";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

export default mergeResolvers(loadFilesSync(path.join(__dirname)));