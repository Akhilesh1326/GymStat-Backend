
export interface user {
    userName: string,
    name: string,
    password: string,
    phoneNumber?: string,
    email?: string,
}

export interface userSignIn{
    userName: string,
    password: string
}

export interface updateUser {
    userName?   : string,
    name?: string,
    password?: string,
    phoneNumber?: string,
    email?: string,
}