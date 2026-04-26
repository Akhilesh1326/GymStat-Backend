import { updateUser, user, userSignIn } from "../type"
import prisma from '../../../lib/prisma'


export async function createUser(params: user) {
    try {
        const { userName, name, phoneNumber, email, password } = params;
        const userCreatedData = await prisma.user.create({
            data: {
                userName,
                name,
                phoneNumber,
                email,
                password
            }
        })

        return userCreatedData;
    }
    catch (error) {
        console.log("Error = ", error)
    }
}

export async function signInUser(params: userSignIn) {
    try {
        const { userName, password } = params;

        const userData = await prisma.user.findFirst({
            where: { userName, password, activated: true }
        })

        console.log(userData)

        if (!userData) return;

        return userData
    } catch (error) {
        console.log("Error = ", error)
    }
}

export async function updateUser(params: { updateData: updateUser, userId: string }) {
    try {
        console.log(params)
        const updatedUserData = await prisma.user.update({
            where: { id: params.userId },
            data: {
                ...params.updateData
            }
        })

        return updatedUserData

    } catch (error) {
        console.log("Error = ", error)

    }
}

export async function deleteUser(params: { userId: string }) {
    try {
        const { userId } = params;
        const deletedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                activated: false
            }
        });
    } catch (error) {
        console.log("Error = ", error)
    }
}

export async function getUser(params: {userId: string}) {
    try {
        const { userId } = params;
        const userData = await prisma.user.findFirst({
            where: {id: userId, activated: true}
        })

        return userData;
    } catch (error) {
        console.log("Error = ", error)
    }
    
}