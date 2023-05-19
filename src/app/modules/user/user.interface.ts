export interface IUser {
    id: string,
    name: string,
    email: string,
    gender: "male" | 'female',
    dateOfBirth?: string
}