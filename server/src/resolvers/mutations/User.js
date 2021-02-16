const { PrismaClient, Prisma } = require('@prisma/client')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const appSecret = process.env.APP_SECRET;

const User = {
    createUser: async(parent, args) => {
        const password = await bcrypt.hash(args.data.password, 10);
        let newUser = Prisma.CreateUserInput

        newUser = { username: args.data.username, email: args.data.email, password: password, avatar: args.data.avatar }

        try {
            const createdUser = await prisma.userdata.create({ data: newUser });
            return createdUser;
        } catch (error) {
            console.log("ERROR", error.meta)

            if (error.meta.target == "email_unique") {
                throw new Error("Email alrady registered!");
            }
        }
    },

    loginUser: async(parent, args, context) => {
        const dbUser = await prisma.userdata.findUnique({
            where: {
                email: args.email,
            },
        });
        if (!dbUser) throw new Error("User does not exist!");
        const userID = dbUser.id;
        const userEmail = dbUser.email;
        const samePassword = await bcrypt.compare(args.password, dbUser.password);

        const token = jwt.sign({ userID }, appSecret, { expiresIn: 300 });
        //const refreshToken = jwt.sign({ userID }, appSecret, { expiresIn: "24d" });

        if (samePassword == true)
            return { token: token, user: dbUser };
        else
            throw new Error("Password does not match!");
    }
}

module.exports = User