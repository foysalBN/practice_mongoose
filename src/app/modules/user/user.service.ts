import User from "./user.model"

export const createUserToDB = async () => {

    const newUser = new User({
        id: "d321",
        name: "foysal",
        email: "hablu@gmail.com",
        gender: "male",
        dateOfBirth: "21-1-2000"
    })
    await newUser.save()
    return newUser
}