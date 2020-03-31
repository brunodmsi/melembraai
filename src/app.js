import TweetHandler from './app/Handlers/TweetHandler';
import DateHandler from './app/Handlers/DateHandler';
import RegExHandler from './app/Handlers/RegExHandler';

setInterval(async function () {
  const tweets = await TweetHandler.fetchNewTweets('1244161443777450000');

  let parsedTweets = [];
  for (let i = 0; i < tweets.length; i += 1) {
    const {
      id,
      text,
      user: { id: user_id, screen_name: user_name },
    } = tweets[i];

    const parser = RegExHandler.textToTimestamps(text);
    const parsedDate = DateHandler.createNewDate(parser);

    parsedTweets = [
      ...parsedTweets,
      {
        tweet: {
          id,
          text,
        },

        parsed_date: parsedDate,

        requester: {
          id: user_id,
          name: user_name,
        },
      },
    ];
  }

  console.log(parsedTweets);
}, 2000);
