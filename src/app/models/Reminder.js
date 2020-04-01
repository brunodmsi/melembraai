import Sequelize, { Model } from 'sequelize';

class Reminder extends Model {
  static init(sequelize) {
    super.init(
      {
        tweet: Sequelize.JSON,
        parsed_date: Sequelize.DATE,
        requester: Sequelize.JSON,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Reminder;
