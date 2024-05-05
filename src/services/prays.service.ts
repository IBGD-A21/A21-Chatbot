import { REMINDERS } from "./constants";
import { Reminder, PrayWidthId } from "./interfaces";

export const onSavePray = (newPray: Reminder) => {
  const newPrayTemp: PrayWidthId = {
    id: String(REMINDERS.length),
    ...newPray,
  };
  newPray && REMINDERS.push(newPrayTemp);
};
