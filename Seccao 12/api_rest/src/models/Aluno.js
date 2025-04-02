import { Model, DataTypes } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },

        sobrenome: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },

        email: {
          type: DataTypes.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'E-mail invalido',
            },
          },
        },

        idade: {
          type: DataTypes.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um numero',
            },
          },
        },

        peso: {
          type: DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante',
            },
          },
        },

        altura: {
          type: DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante',
            },
          },
        },

      },

      {
        sequelize,
      },

    );
    return this;
  }
}
