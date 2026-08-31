const app = require('./app')

const PORT = process.env.PORT || 3000;


// Inicia o servidor.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
