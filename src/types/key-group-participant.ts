import { GroupParticipant } from "whatsapp-web.js";

export type KeyGroupParticipant<T extends string> = {
  [P in T]: GroupParticipant[];
};
