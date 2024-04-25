import { Client, LocalAuth } from "whatsapp-web.js";
import { clientEvents } from "./events";

const wwebVersion = '2.2412.54';
const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" }),
  // locking the wweb version
  webVersionCache: {
      type: 'remote',
      remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
  },
});

client.initialize();

for (const event in clientEvents) {
  const $event = clientEvents[event];
  client.on(event, $event);
}
