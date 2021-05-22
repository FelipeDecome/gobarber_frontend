import { isSaturday, isSunday } from 'date-fns';

export const findNextAvailableDate = (date?: Date): Date => {
  const newDate = date ? new Date(date?.setHours(0)) : new Date();

  if (isSaturday(newDate))
    return new Date(newDate.setDate(newDate.getDate() + 2));
  if (isSunday(newDate))
    return new Date(newDate.setDate(newDate.getDate() + 1));
  if (newDate.getHours() > 17) {
    return findNextAvailableDate(
      new Date(newDate.setDate(newDate.getDate() + 1)),
    );
  }

  return newDate;
};
