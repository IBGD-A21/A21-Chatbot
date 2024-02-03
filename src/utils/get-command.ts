import { Tag } from "../types";

export const getCommand = (string: string): [Tag, string] | [] => {
  const [tagCommand, ...message] = string.split("|");
  return tagCommand || message ? [tagCommand.trim() as Tag, message.join("|").trim()] : [];
};
