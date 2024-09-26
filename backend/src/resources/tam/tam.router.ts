import { Router } from "express"
import tamController from "./tam.controller";

const router = Router()

router.get('/', tamController.index);
//router.get('/:id', tamController.read);
router.post('/', tamController.create);
router.delete('/', tamController.removeAll); 

export default router;
