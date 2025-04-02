import { Model, DataTypes } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nao pode ficar vazio',
            },
          },
        },

        filename: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nao pode ficar vazio',
            },
          },
        },

      },

      {
        sequelize,
        tableName: 'fotos',
      },

    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
