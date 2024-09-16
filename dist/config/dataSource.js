"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: './src/config/database.sqlite',
    entities: ['src/entity/**/*.ts'],
    synchronize: true,
});
//# sourceMappingURL=dataSource.js.map