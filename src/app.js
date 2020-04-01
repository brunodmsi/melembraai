import TweetHandler from './app/Handlers/TweetHandler';
import DateHandler from './app/Handlers/DateHandler';

import DatabaseHandler from './app/Handlers/DatabaseHandler';
import './database';

setInterval(async function () {
  const latest = await DatabaseHandler.fetchLatest();
  const tweets = await TweetHandler.fetchNewTweets(latest && latest.tweet.id);

  const parsedTweets = TweetHandler.parseTweets(tweets);
  // const formattedDate = DateHandler.formatResponseDate(
  //   parsedTweets[0].parsed_date
  // );

  // // TODO: redis
  // TweetHandler.replyTweet({
  //   username: parsedTweets[0].requester.name,
  //   tweet_id: parsedTweets[0].tweet.id,
  //   message: `Ok! Seu lembrete foi agendado para ${formattedDate}! Até lá!`,
  // });

  // await DatabaseHandler.saveReminders(parsedTweets);
  // console.log(latest);
}, 2000);
