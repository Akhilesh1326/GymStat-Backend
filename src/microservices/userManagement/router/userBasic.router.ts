import { Router } from "express";
import { createUser } from "../controller/userBasicController";

const router = Router();

router.post('/user', createUser);

router.post('sign-in')

router.patch('/user')

router.delete('/user')
export default router;

