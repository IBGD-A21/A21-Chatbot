import { PhoneNumber } from ".";
import { SerializedPhone } from "./phone.type";

export interface Environment {
  groupName: string;
  sendMessage: string;
  contactReceivers: SerializedPhone[];
  activeMembers: SerializedPhone[];
  inactiveMembers: SerializedPhone[];
  myNumber?: PhoneNumber[];
}
