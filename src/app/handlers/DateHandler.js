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
  createNewDate(parsedTime, tweetCreatedAt) {
    let date = new Date(tweetCreatedAt);

    date = addDays(date, parsedTime.days);
    date = addHours(date, parsedTime.hours);
    date = addMonths(date, parsedTime.months);
    date = addYears(date, parsedTime.years);
    date = addMinutes(date, parsedTime.minutes);
    date = setSeconds(date, 0);

    return date;
  }

  formatResponseDate(rawDate) {
    const date = format(rawDate, "'dia' dd 'de' MMMM 'de' yyyy', às' H:mm'h'", {
      locale: ptBR,
    });

    return date;
  }
}

export default new DateHandler();
