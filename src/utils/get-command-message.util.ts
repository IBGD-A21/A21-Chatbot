import { PIPE_MESSAGE_OPERATOR } from "../constants";

export const getCommand = (command: string) => command.split(PIPE_MESSAGE_OPERATOR)[1];
