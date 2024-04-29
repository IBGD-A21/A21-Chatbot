import { TAGS, ACTION_TAGS } from "../constants";

export type TagName = (typeof TAGS)[number];

export type TagActionName = (typeof ACTION_TAGS)[number];

export type AllTagNames = TagName | TagActionName;
