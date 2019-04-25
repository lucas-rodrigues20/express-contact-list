'use strict';

const columnAndTypes = [{
  name: 'user_id',
  type: (Sequelize) => {
    return {
      type: Sequelize.UUID,
      allowNull: false
    }
  }
}];

// Don't change it
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.addColumn('Contacts', c.name, c.type(Sequelize))
      })
    );
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.removeColumn('Contacts', c.name)
      })
    );
  }
};
