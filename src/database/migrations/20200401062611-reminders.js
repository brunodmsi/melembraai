module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reminders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      tweet: {
        type: Sequelize.JSON,
        allowNull: false,
      },

      parsed_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      requester: {
        type: Sequelize.JSON,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('reminders');
  },
};
