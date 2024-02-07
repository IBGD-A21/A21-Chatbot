import { Client, Message } from "whatsapp-web.js";

export type OnMessage = { client: Client } & Message // & { isMessageReceived: boolean };
