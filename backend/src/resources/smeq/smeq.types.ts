import { Smeq} from "@prisma/client";

export type CreateSmeqDto = Pick<Smeq , "nomeParticipante", "score", "comentario">;