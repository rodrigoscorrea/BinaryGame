import { Router } from "express";
import palavraRouter from "../resources/palavra/palavra.router";
import smeqRouter from "../resources/smeq/smeq.router";
import tamRouter from "../resources/tam/tam.router";

const router = Router();

//router.use("/", authRouter);
router.use("/palavra", palavraRouter);
router.use("/smeq", smeqRouter);
router.use("/tam", tamRouter);


export default router;
