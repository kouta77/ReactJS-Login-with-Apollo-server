const { PrismaClient } = require( '@prisma/client')

const prisma = new PrismaClient();

const User = {
    allUsers: (parent, args) => {
        return prisma.userdata.findMany(args)
    },
    user: (parent, args) => {
        return prisma.userdata.findUnique({
            where:{
                email: args.email,
            },
        });
    }
}

 module.exports = User