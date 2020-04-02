import { Op } from 'sequelize';

import Reminder from '../models/Reminder';

class DatabaseHandler {
  async fetchLatest() {
    const latest = await Reminder.findOne({
      order: [['id', 'desc']],
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
          done: false,
        });
      }),
    ]);
  }

  async getReminders() {
    const reminders = await Reminder.findAll({
      where: {
        done: false,
        parsed_date: {
          [Op.lt]: new Date(),
        },
      },
    });

    return reminders;
  }

  async setAsDone(id) {
    const reminder = await Reminder.findOne({ where: { id } });

    await reminder.update({ done: true });
  }
}

export default new DatabaseHandler();
