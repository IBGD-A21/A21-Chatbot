import { PRAYS } from "./constants";
import { Pray, PrayWidthId } from "./interfaces";

export const onSavePray = (newPray: Pray) => {
  const newPrayTemp: PrayWidthId = {
    id: String(PRAYS.length),
    ...newPray,
  };
  newPray && PRAYS.push(newPrayTemp);
};
