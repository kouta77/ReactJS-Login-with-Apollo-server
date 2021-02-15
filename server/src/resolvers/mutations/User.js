
const { PrismaClient, Prisma } = require( '@prisma/client')
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const User = {
    createUser: async (parent, args) => {
        
        const password = await bcrypt.hash(args.data.password, 10);
        //console.log('password', password)
        //console.log('IMG', args.data.avatar)
        let newUser = Prisma.CreateUserInput

        newUser = {username: args.data.username, email: args.data.email, password: password, avatar: args.data.avatar}

        try {
            const createdUser = await prisma.userdata.create({data: newUser});
            return createdUser;
        } catch ( error ) {
            console.log("ERROR", error.meta)

            if(error.meta.target == "email_unique"){
                throw new Error("Email alrady registered!");
            }
        }

        //if(!createdUser.errors.length > 0) throw new Error("User does not exist!");
    },

    loginUser: async (parent, args) => {
        const dbUser = await prisma.userdata.findUnique({
            where:{
                email:args.email,
            },
        });
        if(!dbUser) throw new Error("User does not exist!");
        console.log("user data", dbUser);
        
        const samePassword = await bcrypt.compare(args.password, dbUser.password);

        if(samePassword == true)
        return dbUser;
        else
        throw new Error("Password does not match!");
    }
}

module.exports = User