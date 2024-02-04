import { TAG_COMMANDS } from "../constants";
import { Tag } from "../types";

export const isTagCommand = (command: Tag) => TAG_COMMANDS.includes(command.trim() as Tag);
