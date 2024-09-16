"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routes_1 = __importDefault(require("./routes"));
const dataSource_1 = require("./config/dataSource");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
dataSource_1.AppDataSource.initialize()
    .then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!');
})
    .catch((error) => console.log(error));
exports.default = app;
//# sourceMappingURL=app.js.map