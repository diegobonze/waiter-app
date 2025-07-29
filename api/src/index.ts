import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

  mongoose.connect('mongodb://localhost:27017/waiter-app')
    .then(() => {
      const app = express()
      const port = 3001;

      app.use(express.json())
      app.use(router)

      // ("defina a porta", "função que retorna a mensagem assim que o servidor estiver rodando")
      app.listen(port ,() => {
        console.log(`Server is running on http://localhost:${port}`);
      })
    })
    .catch(() => {
      console.log('Erro ao rodar o banco MongoDB');
    })


