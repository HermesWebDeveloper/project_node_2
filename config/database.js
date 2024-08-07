const { Sequelize, DataTypes } = require('sequelize');

// postgresql://banco_de_dados_para_pratica_de_node_user:nmZdIABjKNScwuf7BYgGJmnpVXROe1Jq@dpg-cqpb9lbv2p9s73c9bdkg-a.oregon-postgres.render.com/banco_de_dados_para_pratica_de_node

const sequelize = new Sequelize('banco_de_dados_para_pratica_de_node', 'banco_de_dados_para_pratica_de_node_user', 'nmZdIABjKNScwuf7BYgGJmnpVXROe1Jq', {
    host: 'dpg-cqpb9lbv2p9s73c9bdkg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    }
});

(
    async () => {
        try {
            await sequelize.authenticate();
            console.log('Conexão com o banco estabelecida com sucesso!');
        } catch (error) {
            console.error('Ocorreu o seguinte erro: ', error);
        };
    }
)();

module.exports = sequelize;