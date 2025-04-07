/* eslint-disable no-undef */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('alunos', {
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

      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      altura: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      created_at: {
        type: DataTypes.DATE,
        sllowNull: false,
      },

      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('alunos');
  },
};
