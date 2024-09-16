"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petController_1 = __importDefault(require("../controllers/petController"));
const router = express_1.default.Router();
const petController = new petController_1.default();
router.post('/', petController.criaPet);
exports.default = router;
//# sourceMappingURL=petRouter.js.map