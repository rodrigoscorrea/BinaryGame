import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { getTams, createTam, deleteAllTams} from "./tam.services";
import { CreateTamDto } from "./tam.types";

const index = async (req: Request, res: Response) => {
    try {
        const tams = await getTams();
        res.status(StatusCodes.OK).json(tams);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

/* const read = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ativo = await getAtivo(id);
        if (!ativo) {
            return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        }
        return res.json(ativo)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}; */

const create = async (req: Request, res: Response) => {
    const tamData = req.body as CreateTamDto;
    try {  
        const novoTam = createTam(tamData);
        res.status(StatusCodes.CREATED).json(novoTam);
    } catch (error) {
        console.error(error);
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Erro ao criar TAM" });
    }
};

const removeAll = async (req: Request, res:Response) => {
    try{
        await deleteAllTams();
        res.status(StatusCodes.OK).json({message: "todas os TAMs deletados"});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
export default {index, create, removeAll}