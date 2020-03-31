import { addYears, addMonths, addDays, addMinutes, addHours } from 'date-fns';

class DateHandler {
  createNewDate(parsedTime) {
    let parsedDate = new Date();

    parsedDate = addDays(parsedDate, parsedTime.days);
    parsedDate = addHours(parsedDate, parsedTime.hours);
    parsedDate = addMonths(parsedDate, parsedTime.months);
    parsedDate = addYears(parsedDate, parsedTime.years);
    parsedDate = addMinutes(parsedDate, parsedTime.minutes);

    return parsedDate;
  }
}

export default new DateHandler();
