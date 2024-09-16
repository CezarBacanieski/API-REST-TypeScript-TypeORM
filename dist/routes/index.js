"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const petRouter_1 = __importDefault(require("./petRouter"));
const router = (app) => {
    app.use('/pets', petRouter_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map