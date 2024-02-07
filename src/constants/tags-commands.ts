import { Tag } from "../types";
import { TAGS } from "./tags.constant";

export const TAG_COMMANDS = TAGS.map((tag) => `@${tag}`) as Tag[];
