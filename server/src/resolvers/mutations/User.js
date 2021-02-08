
const { PrismaClient, Prisma } = require( '@prisma/client')
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const User = {
    createUser: async (parent, args) => {
        
        const password = await bcrypt.hash(args.data.password, 10);
        console.log('password', password)
        let newUser = Prisma.CreateUserInput
        newUser = {username: args.data.username, email: args.data.email, password: password}

        const createdUser = await prisma.userdata.create({data: newUser});

        return createdUser;
    },
    loginUser: async (parent, args) => {
        const dbUser = await prisma.userdata.findUnique({
            where:{
                email:args.email,
            },
        });
        if(!dbUser) throw new Error("User does not exist!");
        console.log("user data", dbUser);
        let samePassword = false;

        bcrypt.compare(args.password, dbUser.password, (e,result)=> {
                console.log('crypt result: ',result);
                samePassword = result;
            }
        );
        
        if(samePassword == true)
        return dbUser;
        else
        throw new Error("Password does not match!");
    }
}

module.exports = User