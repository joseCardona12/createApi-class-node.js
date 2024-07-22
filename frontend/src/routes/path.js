import path from "path";
import { fileURLToPath } from "url";
import { Util } from "../classes/utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const dataPathFileAnimes = Util.getPathFile(__dirname, "animes");
export const dataPathFileStudies = Util.getPathFile(__dirname, "studies");