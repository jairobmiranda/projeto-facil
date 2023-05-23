const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'projeto-facil-front/public')));

const port = 80;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});