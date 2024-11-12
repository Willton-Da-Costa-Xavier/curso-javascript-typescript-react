/* eslint-disable no-undef */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      created_at: {
        type: DataTypes.DATE,
        sllowNull: false,
      },

      updated_at: {
        type: DataTypes.DATE,
        sllowNull: false,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
