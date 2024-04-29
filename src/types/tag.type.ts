import { TagName, TagActionName } from ".";

export type Tag = `@${TagName}`;

export type ActionTag = `@${TagActionName}`;

export type AllTags = Tag | ActionTag;