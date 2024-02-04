import { Contact } from "whatsapp-web.js";

export const buildTags = (contacts: Contact[]) => {
  const tag = contacts.map((contact) => {
    return `@${contact.id.user}`;
  });

  return tag.join(" ");
};
