
import * as express from 'express';
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Dimebagphilip1971',
  database: 'omnicom'
});

// Establecer conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos MySQL establecida');
  }
});

// Definir la ruta y la lógica de consulta
app.get('/', (req, res) => {
  const query = 'SELECT * FROM usuario';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los datos:', err);
      return res.status(500).json({ error: 'Error al obtener los datos' });
    }

    // Enviar los resultados como respuesta JSON
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
