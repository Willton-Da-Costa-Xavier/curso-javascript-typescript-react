import multer from 'multer';

import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename });

        return res.json(req.file);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }
    });
  }
}

export default new FotoController();
