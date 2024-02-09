import { Contact } from "whatsapp-web.js";
import { buildTags } from "./build-contact-tag.util";

export const tagMessage = (contacts: Contact[], message: string = "") => `🤖 A21 BOT: ${message} ${buildTags(contacts)}`;
