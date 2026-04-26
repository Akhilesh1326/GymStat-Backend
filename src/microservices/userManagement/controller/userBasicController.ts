import { Request, response, Response } from "express";
import { userReqParamsSchema, userRequestBodySchema, userSignInBodySchema } from '../schemas/userBasicSchema'
import { createUser, deleteUser, getUser, signInUser, updateUser } from '../main/userBasic';


export function greetController(req: Request, res: Response) {
    res.status(200).json({
        message:'Hey, you are in user management service of GymStat'
    })
}

export async function createUserController(req: Request, res: Response) {
    const userData = userRequestBodySchema.parse(req.body);
    const { userName, name, password, email, phoneNumber } = userData;
    const response = await createUser({ userName, name, password, email, phoneNumber });

    res.status(201).json({
        message: "User created successfully",
        response
    })
}

export async function signInUserController(req: Request, res: Response) {
    console.log(req.body)
    const user = userSignInBodySchema.parse(req.body);

    const { userName, password } = req.body;

    const response = await signInUser({ userName, password });
    if (!response) res.status(400).json({ message: 'user not found' });

    return res.status(302).json({
        messsage: "user found successfully"
    })
}

export async function updateUserController(req: Request, res: Response) {
    const user = req.body;
    const requestParams = userReqParamsSchema.parse(req.params);

    const updatedUserResponse = await updateUser({ updateData: user, userId: requestParams.userId });

    return res.status(200).json({
        message: "User information updated successfully",
        updatedUserResponse
    })

}

export async function deleteUserController(req: Request, res: Response) {
    const userData = userReqParamsSchema.parse(req.params);

    await deleteUser({ userId: userData.userId });
    res.status(204).json({
        message: 'User deleted successfully'
    })
}

export async function getUserController(req: Request, res: Response) {
    const reqParams = userReqParamsSchema.parse(req.params);
    const userDataResponse = await getUser({userId: reqParams.userId});

    res.status(200).json({
        message: 'user retrived successfully',
        userDataResponse
    })
} 
