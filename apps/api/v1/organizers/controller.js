// import services categories
const { createOrganizer } = require('../../../services/mongoose/users');
const { StatusCodes } = require('http-status-codes');


const createCMSOrganizer = async (req, res, next) => {
    try {
      let result = await createOrganizer(req);
        res.status(StatusCodes.CREATED).json({
          data: result
      });
    } catch (err) {
        next(err);
    }
};

module.exports = {
  createCMSOrganizer,
}