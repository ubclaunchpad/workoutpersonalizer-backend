'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MockGroups extends sequelize_1.Model {
        static associate(models) {
        }
    }
    ;
    MockGroups.init({
        Mock2Id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Mock2',
                key: 'id',
            }
        },
        Mock3Id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Mock3',
                key: 'id',
            }
        }
    }, {
        sequelize,
        modelName: 'MockGroups',
    });
    return MockGroups;
};
//# sourceMappingURL=mockgroups.js.map