const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpiration, jwtRefreshTokenSecret, jwtRefreshTokenExpiration } = require('../config');

// token
const createJWT = ({ payload }) => {
    // function sign dari jwt
    // untuk argumen ke 3 optional bisa dikirim atau tidak
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: jwtExpiration,
    })
    return token;
}
const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);


// refresh token
const createRefreshJWT = ({payload}) =>{
    const token = jwt.sign(payload, jwtRefreshTokenSecret,{
        expiresIn: jwtRefreshTokenExpiration
    })
    return token
}

const isTokenValidRefreshToken = ({ token }) => jwt.verify(token, jwtRefreshTokenSecret);

module.exports = {
    createJWT,
    isTokenValid,
    createRefreshJWT,
    isTokenValidRefreshToken
}