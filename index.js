const express = require("express");
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./config/bd');
const eventoRoutes = require('./router/eventoRoutes');
const usuarioRoutes = require('./router/usuarioRoutes');
const inscripcionRoutes = require('./router/inscripcionRoutes'); 

dotenv.config();
const port = process.env.port;

app.use(express.json());

app.use('/api/eventos', eventoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/inscripciones', inscripcionRoutes);

let startDB = async() => {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
      console.log(`Servidor corriendo  http://localhost:${port}`);
    });
  } catch (e) {
    console.log("Error al conectar con la base de datos");
  }
};
startDB();