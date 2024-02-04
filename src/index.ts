import { Chat, Client, Contact, GroupChat, LocalAuth, Message } from "whatsapp-web.js";
import { getCommand, isTagCommand, tagMessage } from "./utils";
import { TagParticipant } from "./types";

const qrCode = require("qrcode-terminal");
const fs = require("fs");

const GROUP_NAME = "Biejos jotos y Divas frustradas";
const message = "IGNOREN ESTE MENSAJE";

const ESTEBAN_NUMBER = "5218116647059@c.us";
const MY_NUMBER = "5218114121718@c.us";

const CONTACT_RECEIVER = MY_NUMBER;

const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" }),
});

client.on("authenticated", (session: any) => {});

client.initialize();

client.on("qr", (qr: any) => {
  qrCode.generate(qr, { small: true });
});

client.on("ready", async () => {
  console.log("ready");
});

const activeMembers = ["5218114121718", "5218120395543", "5218115292728"];
const ghostMembers = ["5218115706447", "5218184998480", "5218121992617"];

client.on("message_create", async (data: Message) => {
  if (data.from !== CONTACT_RECEIVER) return;

  const [tagCommand, message] = getCommand(data.body);

  if (!tagCommand || !message) return;

  if (!isTagCommand(tagCommand)) return;

  const allChats = await getAllChats();
  const a21Group = allChats.filter((chat) => chat.isGroup && chat.name === GROUP_NAME)[0] as GroupChat;
  const allGroupMembers = a21Group.participants;

  const filters: TagParticipant = {
    "@everyone": (() => allGroupMembers.map((member) => member.id.user))(),
    "@active": activeMembers,
    "@ghosts": ghostMembers,
  };

  let selectedFilter = filters[tagCommand];

  const filteredMembers = allGroupMembers.filter((member) => selectedFilter.includes(member.id.user));

  const contacts = await Promise.all<Contact>(filteredMembers.map(async (contact) => await client.getContactById(contact.id._serialized)));

  if (contacts) {
    const messageSent = await a21Group.sendMessage(tagMessage(contacts, message), { mentions: contacts });
  }
});

const getAllChats = async (): Promise<Chat[]> => await client.getChats();
