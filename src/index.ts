
import * as express from 'express';
import { Request, Response } from 'express';
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'YES_BPO-BI',
  password: '',
  database: 'bdom'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
  }})
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
  });

const initialState = {
  cart: [],
  products: [
    {
      'id': '1',
      'user': 'Felipe Rodriguez',
      'password': '1234',
      'telefono': 3167553547,
      'email': 'philiprockert@gmail.com',
    },
    {
      
      'id': '1',
      'user': 'Felipe Rodriguez',
      'password': 'Camiseta',
      'telefono': 3167553547,
      'email': 'philiprockert@gmail.com',
    },
    {
      
      'id': '1',
      'user': 'Felipe Rodriguez',
      'password': 'Camiseta',
      'telefono': 3167553547,
      'email': 'philiprockert@gmail.com',
    },
    {
      
      'id': '1',
      'user': 'Felipe Rodriguez',
      'password': 'Camiseta',
      'telefono': 3167553547,
      'email': 'philiprockert@gmail.com',
    },
    {
 
      'id': '1',
      'user': 'Felipe Rodriguez',
      'password': 'Camiseta',
      'telefono': 3167553547,
      'email': 'philiprockert@gmail.com',
    },
    {
     
      'id': '1',
      'user': 'Felipe Rodriguez',
      'password': 'Camiseta',
      'telefono': 3167553547,
      'email': 'philiprockert@gmail.com',
    },
  ],
};


