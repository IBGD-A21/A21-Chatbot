import { schedule } from "node-cron";
import { PRAYS } from "./constants";

const reminders: any[] = [];

export const reminder = () => {
  // schedule("", () => {
  //     PRAYS.forEach((pray) => console.log(`${pray.from || "anonymous"}. ${pray.title || ""}, ${pray.message}`));
  //   },
  //   { scheduled: true }
  // );
};

const onNewRemind = (newRemind: unknown) => {
  reminders.push(newRemind);
};

const onDeleteReminder = () => {};

// @pray | Rodrigo | Hola!. oren para que esto jale

// @everyone recordatorio manual
// @pray Yo?. recordatorio manual
// @reminder @everyone este es un recordatorio generico
