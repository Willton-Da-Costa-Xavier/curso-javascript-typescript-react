import Aluno from '../models/Aluno';
class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Tomas',
      sobrenome: 'Otavio',
      email: 'tavio@gmail.com',
      idade: 20,
      peso: 70,
      altura: 1.55,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
