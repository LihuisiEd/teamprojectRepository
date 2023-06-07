const express = require('express');
const app = express();

// Configuración de rutas y middleware aquí

// Iniciar el servidor
const port = 3000; // Puedes cambiar el número de puerto si lo deseas
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
