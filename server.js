const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
const {User} = require('./models/modelos');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Página inicial.')
});

app.get('/api/usuarios', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const {firstname, surname, email, password} = req.body;
        const newUser = await User.create({firstname, surname, email, password});
        res.status(201).json(newUser);
        console.log(newUser)
    } catch (error) {
        console.log("Erro no cadastro do usuário que veio do front: ", error);
    };
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});

module.exports = app;