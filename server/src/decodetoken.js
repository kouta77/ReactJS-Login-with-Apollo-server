const jwt = require('jsonwebtoken');
const appSecret = process.env.APP_SECRET;


const DecodedToken = (req, requireAuth = true) => {
    console.log('req', req)
    const header = req.authorization;

    if (header) {
        const token = header.replace('Bearer ', '');
        const decoded = jwt.verify(token, appSecret);
        return decoded;
    }
    if (requireAuth) {
        throw new Error('Login in to access resource');
    }
    return null
}
module.exports = { DecodedToken }