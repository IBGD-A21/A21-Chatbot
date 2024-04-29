import { isTagCommand } from ".";
import { AllTags } from "../types";

export const getCommand = (input: string): [AllTags[], string] => {
  const inputMessage = input.split(" ");

  const commands = inputMessage.filter((tag) => isTagCommand(tag as AllTags)) as AllTags[];
  const message = inputMessage.filter((tag) => !isTagCommand(tag as AllTags)).join(" ");

  return [commands, message];
};
