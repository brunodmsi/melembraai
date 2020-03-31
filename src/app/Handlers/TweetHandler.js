import Twitter from 'twitter';
import twitterConfig from '../../config/twitter';

import expressions from '../../utils/expressions';

class TweetHandler {
  constructor(client) {
    this.client = client;
  }

  async fetchNewTweets(since_id) {
    let tweets = [];

    await Promise.all([
      this.client
        .get('statuses/mentions_timeline', { since_id })
        .then((tweet) => {
          tweets = tweet;
        })
        .catch((err) => console.log(err)),
    ]);

    return tweets;
  }
}

export default new TweetHandler(Twitter(twitterConfig));
