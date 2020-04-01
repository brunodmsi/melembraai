import expressions from '../../utils/expressions';

class RegExHandler {
  textToTimestamps(text) {
    const parser = {};
    const keys = Object.entries(expressions);

    for (let i = 0; i < keys.length; i += 1) {
      let temp = text.match(keys[i][1]);

      temp = temp
        ? temp
            .map((t) => Number(t.match(/(\d+)/)[0]))
            .reduce((a, b) => a + b, 0)
        : 0;

      parser[keys[i][0]] = temp;
    }

    return parser;
  }
}

export default new RegExHandler();
