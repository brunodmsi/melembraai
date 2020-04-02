import TweetHandler from './app/handlers/TweetHandler';
import DateHandler from './app/handlers/DateHandler';

import SendTweet from './app/jobs/SendTweet';
import Queue from './lib/Queue';

import DatabaseHandler from './app/handlers/DatabaseHandler';
import './database';

setInterval(async function () {
  const latest = await DatabaseHandler.fetchLatest();
  const tweets = await TweetHandler.fetchNewTweets(latest && latest.tweet.id);

  console.log(`${tweets.length} new mentions`);

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
    console.log('Tweet(s) sent and saved to the database for later reminding');
  }

  const pastReminders = await DatabaseHandler.getReminders();
  if (pastReminders.length > 0) {
    const tweetSender = [];
    const dbSender = [];
    pastReminders.forEach((reminder) => {
      tweetSender.push(
        Queue.add(SendTweet.key, {
          message: `Ola! Aqui esta o seu lembrete para este status!`,
          reminder: {
            tweet: reminder.tweet,
            requester: reminder.requester,
          },
        })
      );

      dbSender.push(DatabaseHandler.setAsDone(reminder.id));
    });

    await Promise.all([tweetSender, dbSender]);

    console.log(
      `${pastReminders.length} reminders sent and updated "done" to TRUE in the db`
    );
  } else {
    console.log('0 reminders to be sent');
  }

  console.log(`\n`);
}, 60000);
