import { Contact } from "whatsapp-web.js";
import { buildTags } from "./build-tags";

export const tagMessage = (contacts: Contact[], message: string = "") => `${buildTags(contacts)} ${message}`;
