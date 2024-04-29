import { Contact, GroupChat } from "whatsapp-web.js";
import { getCommand, isActionTag, isTag, isTagCommand, tagMessage } from "../../utils";
import { AllTags, Tag, TagParticipant } from "../../types";
import { OnMessage } from "./on-message.type";
import { environment } from "../../envs/environment.dev";

export const onMessage = async (props: OnMessage) => {
  const { body, client, from, to } = props;

  console.log("\n\n****** NEW MESSAGE ******");
  console.table({ from, to, body });

  if (!environment.contactReceivers.includes(from)) return;

  const [tagCommands, message] = getCommand(body);

  if (!tagCommands || tagCommands.length === 0 || !message) return;

  if (tagCommands.some((tagCommand) => !isTagCommand(tagCommand))) return;

  const allChats = await client.getChats();
  const a21Group = allChats.filter((chat) => chat.isGroup && chat.name === environment.groupName)[0] as GroupChat;
  const allGroupMembers = a21Group.participants;

  const tags: TagParticipant = {
    "@everyone": (() => allGroupMembers.map((member) => member.id.user))(),
    "@active": environment.activeMembers,
    "@ghosts": environment.inactiveMembers,
    "@me": environment.myNumber,
  };

  // Reminders
  {
    if (!tagCommands.some((tag: AllTags) => isActionTag(tag))) return;
    const reminderActions = tagCommands.filter(tag => isActionTag(tag));
  }




  const filterKey = tagCommands.find((tag) => isTag(tag)) as Tag;

  let selectedFilter = tags[filterKey || "@everyone"];

  const filteredMembers = allGroupMembers.filter((member) => selectedFilter.includes(member.id.user));

  const contacts = await Promise.all<Contact>(filteredMembers.map(async (contact) => await client.getContactById(contact.id._serialized)));

  if (contacts) {

    console.log("SENT MESSAGE", tagMessage(contacts, message));
    // const messageSent = await a21Group.sendMessage(tagMessage(contacts, message), { mentions: contacts });
  }
};
