module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down() {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
