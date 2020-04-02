import TweetHandler from '../handlers/TweetHandler';

class SendTweet {
  get key() {
    return 'SendTweet';
  }

  async handle({ data }) {
    const { reminder, message } = data;

    await TweetHandler.replyTweet({
      username: reminder.requester.name,
      tweet_id: reminder.tweet.id,
      message,
    });
  }
}

export default new SendTweet();
