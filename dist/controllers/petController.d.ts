import { Request, Response } from 'express';
export default class PetController {
    criaPet(req: Request, res: Response): Response<any, Record<string, any>>;
    listaPets(res: Response): Response<any, Record<string, any>>;
    atualizaPet(req: Request, res: Response): Response<any, Record<string, any>>;
    deletaPet(req: Request, res: Response): Response<any, Record<string, any>>;
}
