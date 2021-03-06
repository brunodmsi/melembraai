import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Reminder from '../app/models/Reminder';

const models = [Reminder];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
    // models.map(
    //   (model) => model.associate && model.associate(this.connection.models)
    // );
  }
}

export default new Database();
