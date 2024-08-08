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
    const users = await User.findAll({
        order: [['id', 'ASC']]
    });
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

app.get('/api/usuarios/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "Usuário não encontrado!"})
        };
    } catch(error) {
        console.log("Erro ao carregar usuário: ", error);
    };
});

app.delete('/api/usuarios/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
    } catch (error) {
        console.log("Erro ao excluir usuário: ", error);
    }
});

app.put('/api/usuarios/:id', async (req, res) => {
    try {
        const {firstname, surname, email, password} = req.body;
        const user = await User.findByPk(req.params.id);
        user.update({firstname, surname, email, password});
        await user.save();
        res.json(user);
    } catch(error) {
        console.log("Erro ao fazer update do usuário: ", error);
    };
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});

module.exports = app;