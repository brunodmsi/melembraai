import Twitter from 'twitter';
import twitterConfig from './config/twitter';

const client = Twitter(twitterConfig);

setInterval(async function () {
  let body = [];

  await Promise.all([
    client
      .get('statuses/mentions_timeline', {})
      .then((tweet) => {
        body = tweet;
      })
      .catch((err) => console.log(err)),
  ]);

  console.log(body);
}, 5000);
