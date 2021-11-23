'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Mock3 extends sequelize_1.Model {
        static associate(models) {
            Mock3.belongsToMany(models.Mock2, {
                through: 'MockGroups'
            });
        }
    }
    ;
    Mock3.init({
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
        modelName: 'Mock3',
    });
    return Mock3;
};
//# sourceMappingURL=mock3.js.map