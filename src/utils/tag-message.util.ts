import { Contact } from "whatsapp-web.js";
import { buildTags } from "./build-contact-tag.util";

export const tagMessage = (contacts: Contact[], message: string = "") => `${buildTags(contacts)} ${message}`;
