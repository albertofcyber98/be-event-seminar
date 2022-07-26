const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpiration } = require('../config');

const createJWT = ({ payload }) => {
    // function sign dari jwt
    // untuk argumen ke 3 optional bisa dikirim atau tidak
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: jwtExpiration,
    })
    return token;
}

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

module.exports = {
    createJWT,
    isTokenValid
}