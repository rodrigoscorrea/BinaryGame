import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { getSmeqs, createSmeq, deleteAllSmeqs} from "./smeq.services";
import { CreateSmeqDto } from "./smeq.types";

const index = async (req: Request, res: Response) => {
    try {
        const smeqs = await getSmeqs();
        res.status(StatusCodes.OK).json(smeqs);
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
    const smeqData = req.body as CreateSmeqDto;
    try {  
        const novaSmeq = createSmeq(smeqData);
        res.status(StatusCodes.CREATED).json(novaSmeq);
    } catch (error) {
        console.error(error);
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Erro ao criar smeq" });
    }
};

const removeAll = async (req: Request, res:Response) => {
    try{
        await deleteAllSmeqs();
        res.status(StatusCodes.OK).json({message: "todas os smeqs deletados"});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
export default {index, create, removeAll}