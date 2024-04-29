import { TAG_COMMANDS, TAG_ACTION_COMMANDS } from "../constants";
import { ActionTag, AllTags, Tag } from "../types";

export const isTagCommand = (command: AllTags) => TAG_COMMANDS.includes(command.trim() as Tag) || TAG_ACTION_COMMANDS.includes(command.trim() as ActionTag);

export const isTag = (command: AllTags) => TAG_COMMANDS.includes(command.trim() as Tag);

export const isActionTag = (command: AllTags) => TAG_ACTION_COMMANDS.includes(command.trim() as ActionTag);
