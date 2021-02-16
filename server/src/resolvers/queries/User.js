const { PrismaClient } = require('@prisma/client')
const { DecodedToken } = require('../../decodetoken');
const prisma = new PrismaClient();

const User = {
    allUsers: (parent, args, { req }) => {
        const decoded = DecodedToken(req);
        console.log('decoded', decoded);
        return prisma.userdata.findMany(args)
    },
    user: (parent, args) => {
        return prisma.userdata.findUnique({
            where: {
                email: args.email,
            },
        });
    }
}

module.exports = User