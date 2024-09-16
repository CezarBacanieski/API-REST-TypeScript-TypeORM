import EnumEspecie from "../enum/EnumEspecie";

interface IPet {
  id: number;
  nome: string;
  especie: EnumEspecie;
  dataNascimento: Date;
  adotado: boolean;
}

export default IPet;
