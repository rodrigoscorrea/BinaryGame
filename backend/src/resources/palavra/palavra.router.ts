import { Router } from "express"
import palavraController from "./palavra.controller";

const router = Router()

router.get('/', palavraController.index);
//router.get('/:id', palavraController.read);
router.post('/', palavraController.create);
router.delete('/', palavraController.removeAll); 

export default router;
