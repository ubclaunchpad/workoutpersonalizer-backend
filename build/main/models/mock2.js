'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Mock2 extends sequelize_1.Model {
        static associate(models) {
            Mock2.belongsToMany(models.Mock3, {
                through: 'MockGroups'
            });
        }
    }
    ;
    Mock2.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Mock2',
    });
    return Mock2;
};
//# sourceMappingURL=mock2.js.map