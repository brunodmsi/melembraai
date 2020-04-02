import TweetHandler from './app/handlers/TweetHandler';
import DateHandler from './app/handlers/DateHandler';

import SendTweet from './app/jobs/SendTweet';
import Queue from './lib/Queue';

import DatabaseHandler from './app/handlers/DatabaseHandler';
import './database';

setInterval(async function () {
  const latest = await DatabaseHandler.fetchLatest();
  const tweets = await TweetHandler.fetchNewTweets(latest && latest.tweet.id);

  if (tweets.length > 0) {
    const parsedTweets = TweetHandler.parseTweets(tweets);

    const sender = [];
    parsedTweets.forEach(({ tweet, requester, parsed_date }) => {
      const date = DateHandler.formatResponseDate(parsed_date);
      sender.push(
        Queue.add(SendTweet.key, {
          message: `Ok! Seu lembrete foi agendado para ${date}! Até lá!`,
          reminder: {
            tweet,
            requester,
          },
        })
      );
    });
    await Promise.all(sender);

    await DatabaseHandler.saveReminders(parsedTweets);
  }

  console.log(`${tweets.length} new mentions`);
}, 2000);
