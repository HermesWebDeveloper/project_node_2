const sequelize = require('../config/database');
const {DataTypes, Model }= require('sequelize');

class User extends Model {};

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: 'User',
    }
);

(
    async () => {
        try {
            await sequelize.sync({force: true});
        }catch (error){
            console.log("Erro ao forçar modelos: " + error);
        }
    }
)();

module.exports = User;