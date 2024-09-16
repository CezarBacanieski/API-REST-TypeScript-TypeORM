import express from 'express';
import 'reflect-metadata';
import router from './routes';
import { AppDataSource } from './config/dataSource';

const app = express();
app.use(express.json());

router(app);

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!');
  })
  .catch((error: Error) => console.log(error));

export default app;
