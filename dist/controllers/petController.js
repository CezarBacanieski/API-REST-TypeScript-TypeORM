"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnumEspecie_1 = __importDefault(require("../enum/EnumEspecie"));
let petList = [];
let id = 0;
function geraId() {
    id = id + 1;
    return id;
}
class PetController {
    criaPet(req, res) {
        const { adotado, especie, dataNascimento, nome } = req.body;
        if (!Object.values(EnumEspecie_1.default).includes(especie)) {
            return res.status(400).json({ error: 'invalid specie' });
        }
        const newPet = {
            adotado,
            especie,
            id: geraId(),
            dataNascimento,
            nome,
        };
        petList.push(newPet);
        return res.status(201).json(newPet);
    }
    listaPets(res) {
        return res.status(200).json(petList);
    }
    atualizaPet(req, res) {
        const { id } = req.params;
        const { adotado, especie, dataNascimento, nome } = req.body;
        const pet = petList.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(404).json({ erro: 'Pet não encontrado' });
        }
        pet.nome = nome;
        pet.dataNascimento = dataNascimento;
        pet.especie = especie;
        pet.adotado = adotado;
        return res.status(200).json(pet);
    }
    deletaPet(req, res) {
        const { id } = req.params;
        const pet = petList.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(404).json({ erro: 'Pet não encontrado' });
        }
        const index = petList.indexOf(pet);
        petList.splice(index, 1);
        return res.status(200).json({ mensagem: 'Pet deletado com sucesso' });
    }
}
exports.default = PetController;
//# sourceMappingURL=petController.js.map