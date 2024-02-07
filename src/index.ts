import { Client, Events, LocalAuth } from "whatsapp-web.js";
import { clientEvents } from "./events";
import { onAuthenticated } from "./events/on-authenticated/on-authenticated.event";
import { onReady } from "./events/on-ready/on-ready.event";
import { onMessage } from "./events/on-message/on-message.event";
import { onCreateMessage } from "./events/on-create-message/on-create-message.event";
import { onQrReceived } from "./events/on-qr-received/on-qr-received.event";

const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" }),
});

client.initialize();

// client.on(Events.AUTHENTICATED, onAuthenticated)
// client.on(Events.READY, onReady)
// client.on(Events.MESSAGE_RECEIVED, onMessage)
// client.on(Events.MESSAGE_CREATE, onCreateMessage)
// client.on(Events.QR_RECEIVED, onQrReceived)

for (const event in clientEvents) {
  const $event = clientEvents[event];
  client.on(event, $event);
}
