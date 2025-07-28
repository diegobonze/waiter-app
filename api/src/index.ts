import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const port = 3001;

    // ("defina a porta", "função que retorna a mensagem assim que o servidor estiver rodando")
    app.listen(port ,() => {
      console.log(`Server is running on http://localhost:${port}`);
    })
  })
  .catch(() => console.error('MongoDB connection error:'));


