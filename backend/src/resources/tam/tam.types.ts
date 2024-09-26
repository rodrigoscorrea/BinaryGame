import { Tam } from "@prisma/client";

export type CreateTamDto = Pick<Tam , "nomeParticipante","easeOfUse1",
                            "easeOfUse2",
                            "easeOfUse3",
                            "enjoyment1",
                            "enjoyment2",
                            "enjoyment3"
                            >;