export type Pray = {
  message: string;
  from?: string | 'anonymous';
  title?: string;
};
export type PrayWidthId = Pray & { id: string };

export type Prays = Pray[];
