import {
  addYears,
  addMonths,
  addDays,
  addMinutes,
  addHours,
  setSeconds,
  format,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

class DateHandler {
  createNewDate(parsedTime) {
    let parsedDate = new Date();

    parsedDate = addDays(parsedDate, parsedTime.days);
    parsedDate = addHours(parsedDate, parsedTime.hours);
    parsedDate = addMonths(parsedDate, parsedTime.months);
    parsedDate = addYears(parsedDate, parsedTime.years);
    parsedDate = addMinutes(parsedDate, parsedTime.minutes);
    parsedDate = setSeconds(parsedDate, 0);

    return parsedDate;
  }

  formatResponseDate(rawDate) {
    const date = format(rawDate, "'dia' dd 'de' MMMM 'de' yyyy', às' H:mm'h'", {
      locale: ptBR,
    });

    return date;
  }
}

export default new DateHandler();
