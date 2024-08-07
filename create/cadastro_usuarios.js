const User = require('../models/users');
const sequelize = require('../config/database');

async function teste() {
    try {

        console.log("Forçando conexão para criação dos usuários...")
        await sequelize.sync({ force: true });

        var user1 = await User.create({ firstname: 'Hermes' })
        var user2 = await User.create({ firstname: 'Geordes' })

        console.log('User 1: ', user1.toJSON());
        console.log('User 2: ', user2.toJSON());
    } catch (error) {
        console.log('Erro na criação dos usuários: ', error);
    }
}

module.exports = teste();