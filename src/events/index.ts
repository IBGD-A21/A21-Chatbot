import { Events } from "whatsapp-web.js";
import { EventListener } from "./events.types";
import { onAuthenticated } from "./on-authenticated/on-authenticated.event";
import { onReady } from "./on-ready/on-ready.event";
import { onMessage } from "./on-message/on-message.event";
import { onQrReceived } from "./on-qr-received/on-qr-received.event";

export const clientEvents: Partial<Record<Events, EventListener>> = {
  [Events.AUTHENTICATED]: onAuthenticated,
  // [Events.AUTHENTICATION_FAILURE]: undefined,
  [Events.READY]: onReady,
  [Events.MESSAGE_RECEIVED]: onMessage,
  [Events.MESSAGE_CREATE]: onMessage,
  // [Events.MESSAGE_REVOKED_EVERYONE]: undefined,
  // [Events.MESSAGE_REVOKED_ME]: undefined,
  // [Events.MESSAGE_ACK]: undefined,
  // [Events.MESSAGE_EDIT]: undefined,
  // [Events.MEDIA_UPLOADED]: undefined,
  // [Events.CONTACT_CHANGED]: undefined,
  // [Events.GROUP_JOIN]: undefined,
  // [Events.GROUP_LEAVE]: undefined,
  // [Events.GROUP_ADMIN_CHANGED]: undefined,
  // [Events.GROUP_MEMBERSHIP_REQUEST]: undefined,
  // [Events.GROUP_UPDATE]: undefined,
  [Events.QR_RECEIVED]: onQrReceived,
  // [Events.LOADING_SCREEN]: undefined,
  // [Events.DISCONNECTED]: undefined,
  // [Events.STATE_CHANGED]: undefined,
  // [Events.BATTERY_CHANGED]: undefined,
  // [Events.REMOTE_SESSION_SAVED]: undefined,
  // [Events.CALL]: undefined,
};
