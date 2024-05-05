import * as cron from "node-cron";
import { REMINDERS } from "./constants";
import { Reminder, Reminders } from "./interfaces";

export const reminders: Reminders = [];

export const onCreateReminders = () => {
  // onStopReminders();

  REMINDERS.forEach((reminder, index) => {
    const task = cron.schedule(
      reminder.date,
      () => {
        console.log(`${index + 1} ~ REMINDER\nDe: ${reminder.from}\n"${reminder.title?.toUpperCase()}. ${reminder.message}"\n\n`);
      },
      { scheduled: true }
    );

    task.start();
  });
};

export const onInitReminders = () => {
  if (reminders.length === 0) return;

  REMINDERS.forEach((reminder) => {
    const task = cron.schedule(reminder.date, () => {});
    task.start();
  });

  console.info("Reminders Init");
};

export const onStopReminders = () => {
  REMINDERS.forEach((reminder) => {
    const task = cron.schedule(reminder.date, () => {});
    task.stop();
  });

  console.info("Reminders Stopped");
};

export const getAllReminders = () => cron.getTasks();

export const onNewRemind = (newRemind: Reminder) => {
  reminders.push(newRemind);

  console.info("Reminder Added");
  onCreateReminders();
};

const onDeleteReminder = () => {};
