import { Router } from "express"
import smeqController from "./smeq.controller";

const router = Router()

router.get('/', smeqController.index);
//router.get('/:id', smeqController.read);
router.post('/', smeqController.create);
router.delete('/', smeqController.removeAll); 

export default router;
