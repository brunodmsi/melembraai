import TweetHandler from '../handlers/TweetHandler';

class SendTweet {
  get key() {
    return 'SendTweet';
  }

  async handle({ data }) {
    const { date, reminder } = data;

    await TweetHandler.replyTweet({
      username: reminder.requester.name,
      tweet_id: reminder.tweet.id,
      message: `Ok! Seu lembrete foi agendado para ${date}! Até lá!`,
    });
  }
}

export default new SendTweet();
