import { Contact } from "whatsapp-web.js";

export const buildTags = (contacts: Contact[]) => contacts.map((contact) => `@${contact.id.user}`).join(" ");
