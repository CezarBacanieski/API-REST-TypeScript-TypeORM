import { Request, Response } from 'express';
import IPet from '../interfaces/IPet';
import EnumEspecie from '../enum/EnumEspecie';

let petList: IPet[] = [];
let id: number = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {
  criaPet(req: Request, res: Response) {
    const { adotado, especie, dataNascimento, nome } = <IPet>req.body;

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({ error: 'invalid specie' });
    }
    const newPet: IPet = {
      adotado,
      especie,
      id: geraId(),
      dataNascimento,
      nome,
    };
    petList.push(newPet);

    return res.status(201).json(newPet);
  }

  listaPets(res: Response) {
    return res.status(200).json(petList);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { adotado, especie, dataNascimento, nome } = <IPet>req.body;
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

  deletaPet(req: Request, res: Response) {
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
