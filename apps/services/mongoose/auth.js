const Users = require('../../api/v1/users/model');
const { BadRequestError, UnauthorizedError } = require('../../errors');
const { createTokenUser, createJWT } = require('../../utils');
const signin = async (req) => {
    const { email, password } = req.body;
    // jika kosong email dan password maka
    // diperintahkan untuk menginput email dan password
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password');
    }
    // mencari email dari request ke dalam collection
    const result = await Users.findOne({ email: email });
    if (!result) {
        throw new UnauthorizedError('Invalid Credentials');
    }
    // comparePassword dari model users
    const isPasswordCorrect = await result.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthorizedError('Invalid Credentials');
    }
    const token = createJWT({ payload: createTokenUser(result) });
    return {token, role: result.role};
}
module.exports = { signin };