
import * as express from 'express';
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
//creando conexion mysql
const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'YES_BPO-BI',
  password: '',
  database: 'bdom'
});
const port = 3001;
app.use(cors());
//establecer conexion
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
  }})
  
  //consular datos
  const query ='SELECT * FROM usuarios'
  db.query(query, (err, results) => {if (err){
  console.error('error al obtener los datos:', err);
  return;
  }

  console.log(results);
  
app.get('/', (req, res)=>{
  
  res.json(results);
  
})
})
const query2 ='insert into usuarios (nombre, email,  ) * FROM usuarios'
app.listen(port);

