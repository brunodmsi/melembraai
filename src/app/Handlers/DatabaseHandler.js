import Reminder from '../models/Reminder';

class DatabaseHandler {
  async fetchLatest() {
    const latest = await Reminder.findOne({
      order: [['created_at', 'desc']],
    });

    return latest;
  }

  async saveReminders(objects) {
    if (objects.length === 0) return;

    await Promise.all([
      objects.map(async ({ tweet, parsed_date, requester }) => {
        await Reminder.create({
          tweet,
          parsed_date,
          requester,
        });
      }),
    ]);
  }
}

export default new DatabaseHandler();
