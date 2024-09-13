import { Router } from "express";
import palavraRouter from "../resources/palavra/palavra.router";

const router = Router();

//router.use("/", authRouter);
router.use("/palavra", palavraRouter);


export default router;
