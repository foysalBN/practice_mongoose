export interface IUser {
    id: string,
    name: {
        firstName: string,
        lastName: string
    },
    email: string,
    gender: "male" | 'female',
    dateOfBirth?: string
}

export interface IUserMethods {
    fullName(): string;
}