
import * as express from 'express';
import { DB_HOST,PORT,DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './config.js' ;
const mysql = require('mysql2');


const app = express();
const router = express.Router();
const cors = require('cors');



app.use(cors());

const db = mysql.createPool({
  host:DB_HOST,
  port:DB_PORT,
  user:DB_USER,
  password:DB_PASSWORD,
  database:DB_NAME
});
//establecer conexion

  const port = PORT;
  //consular datos
  const query ='SELECT * FROM usuario'
  db.query(query, (err, results) => {if (err){
  console.error('error al obtener los datos:', err);
  return;
  }

  console.log(results);

app.get('/', (req, res)=>{

  res.json(results);

})
})
app.get('/crear', async (req, res)=> {
  const result = await db.query('INSERT INTO usuario(nombre, email, contraseña) VALUES(?, ?, ?)')

})
app.listen(port);

