import { Router } from "express";
import { createUserController, signInUserController, updateUserController, deleteUserController, greetController, getUserController } from "../controller/userBasicController";

const router = Router();

router.get('/', greetController)

router.post('/user', createUserController);

router.post('/sign-in', signInUserController);

router.patch('/user/:userId', updateUserController);

router.delete('/user/:userId', deleteUserController);

router.get('/user/:userId', getUserController)

export default router;

