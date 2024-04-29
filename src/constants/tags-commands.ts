import { ACTION_TAGS, TAGS } from "../constants";
import { Tag, ActionTag } from "../types";

export const TAG_COMMANDS = TAGS.map((tag) => `@${tag}`) as Tag[];

export const TAG_ACTION_COMMANDS = ACTION_TAGS.map((tag) => `@${tag}`) as ActionTag[];
