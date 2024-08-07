const sequelize = require('../config/database');
const {DataTypes, Model }= require('sequelize');

class User extends Model {};
class Categoria extends Model {};
class Produto extends Model {};

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: 'User',
    }
);

Categoria.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'Categora',
    }
)

Produto.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        stock: DataTypes.INTEGER,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        price_with_discount: DataTypes.FLOAT
    },
    {
        sequelize,
        modelName: 'Produto'
    }
);

(
    async () => {
        try {
            await sequelize.sync({force: true});
            console.log("Modelos criados!");
        }catch (error){
            console.log("Erro ao forçar modelos: " + error);
        }
    }
)();

module.exports = { User, Categoria, Produto };