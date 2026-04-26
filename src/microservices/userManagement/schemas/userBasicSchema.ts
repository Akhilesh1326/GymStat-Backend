import { z } from "zod";


export const userRequestBodySchema = z.object({
    userName: z.string(),
    name: z.string(),
    phoneNumber: z.string().optional(),
    email: z.string(),
    password: z.string()
})

export const userSignInBodySchema = z.object({
    userName: z.string(),
    password: z.string()
})

export const userReqParamsSchema = z.object({
    userId: z.string()
})