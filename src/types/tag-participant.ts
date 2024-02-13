import { Environment } from "./environment.type";
import { Tag } from "./tag.type";

type EnvironmentValues = Exclude<Environment[keyof Environment], string>;

export type TagParticipant = Record<Tag, EnvironmentValues>;
