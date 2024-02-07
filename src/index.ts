import { Client, LocalAuth } from "whatsapp-web.js";
import { clientEvents } from "./events";

const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" }),
});

client.initialize();

for (const event in clientEvents) {
  const $event = clientEvents[event];
  client.on(event, $event);
}
