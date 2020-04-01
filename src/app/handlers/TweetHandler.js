import Twitter from 'twitter';
import twitterConfig from '../../config/twitter';

import DateHandler from './DateHandler';
import RegExHandler from './RegExHandler';

class TweetHandler {
  constructor(client) {
    this.client = client;
  }

  async fetchNewTweets(since_id) {
    let tweets = [];

    await Promise.all([
      this.client
        .get('statuses/mentions_timeline', since_id ? { since_id } : {})
        .then((tweet) => {
          tweets = tweet;
        })
        .catch((err) => console.log(err)),
    ]);

    return tweets;
  }

  async replyTweet({ username, tweet_id, message }) {
    let response = {};

    await Promise.all([
      this.client
        .post('statuses/update', {
          status: `@${username} ${message}`,
          in_reply_to_status_id: tweet_id,
        })
        .then((res) => {
          response = res;
        })
        .catch((err) => console.log(err)),
    ]);

    return response;
  }

  parseTweets(tweets) {
    let parsedTweets = [];
    for (let i = 0; i < tweets.length; i += 1) {
      const {
        id_str: tweet_id,
        text: tweet_text,
        user: { id_str: user_id, screen_name: username },
      } = tweets[i];

      const parser = RegExHandler.textToTimestamps(tweet_text);
      const parsedDate = DateHandler.createNewDate(parser);

      parsedTweets = [
        ...parsedTweets,
        {
          tweet: {
            id: tweet_id,
            text: tweet_text,
          },

          parsed_date: parsedDate,

          requester: {
            id: user_id,
            name: username,
          },
        },
      ];
    }

    return parsedTweets.reverse();
  }
}

export default new TweetHandler(Twitter(twitterConfig));
