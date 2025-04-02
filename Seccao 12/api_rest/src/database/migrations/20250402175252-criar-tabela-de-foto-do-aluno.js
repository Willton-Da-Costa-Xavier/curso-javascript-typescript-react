/* eslint-disable no-undef */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('fotos', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      aluno_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },

        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      originalname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      filename: {
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
    await queryInterface.dropTable('fotos');
  },
};
