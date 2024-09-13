import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { getWords, createWord ,deleteAllWords} from "./palavra.services";
import { CreateWordDto } from "./palavra.types";

const index = async (req: Request, res: Response) => {
    try {
        const palavras = await getWords();
        res.status(StatusCodes.OK).json(palavras);
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
    const palavraData = req.body as CreateWordDto;
    try {  
        const novaPalavra = createWord(palavraData);
        res.status(StatusCodes.CREATED).json(novaPalavra);
    } catch (error) {
        console.error(error);
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Erro ao criar palavra" });
    }
};

const removeAll = async (req: Request, res:Response) => {
    try{
        await deleteAllWords();
        res.status(StatusCodes.OK).json({message: "todas as palavras deletadas"});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
}
export default {index, create, removeAll}