const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Página inicial.')
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});

module.exports = app;