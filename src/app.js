import TweetHandler from './app/Handlers/TweetHandler';
import DateHandler from './app/Handlers/DateHandler';

setInterval(async function () {
  const tweets = await TweetHandler.fetchNewTweets('1244161443777450000');
  const parsedTweets = TweetHandler.parseTweets(tweets);

  console.log(parsedTweets);

  // const formattedDate = DateHandler.formatResponseDate(
  //   parsedTweets[0].parsed_date
  // );

  // // TODO: redis
  // TweetHandler.replyTweet({
  //   username: parsedTweets[0].requester.name,
  //   tweet_id: parsedTweets[0].tweet.id,
  //   message: `Ok! Seu lembrete foi agendado para ${formattedDate}! Até lá!`,
  // });
}, 4000);
