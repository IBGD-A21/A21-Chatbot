export type Reminder = {
  message: string;
  from?: string | 'anonymous';
  title?: string;
  date: string;
};
export type PrayWidthId = Reminder & { id: string };

export type Reminders = Reminder[];
