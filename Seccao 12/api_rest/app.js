import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

import './src/config/database.js';
import express from 'express';
import cors from 'cors';
import homeRoutes from './src/routes/homeRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import tokensRoutes from './src/routes/tokenRoutes.js';
import alunoRoutes from './src/routes/alunoRoutes.js';
import fotoRoutes from './src/routes/fotoRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // === Adiciona CORS aqui ===
    this.app.use(cors({
      origin: 'http://localhost:3000', // React frontend
      credentials: true, // se usar cookies ou autenticação
    }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokensRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
