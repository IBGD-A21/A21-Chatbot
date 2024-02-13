import { SerializedPhone } from "../types";

export const createContactFromPhoneNumber = (phoneNumber: string | number): SerializedPhone => `521${phoneNumber}@c.us`;