// import services categories
const {
  createOrganizer,
  createUsers
} = require('../../../services/mongoose/users');
const { StatusCodes } = require('http-status-codes');

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

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
const createCMSUser = async (req, res, next) => {
  try {
    let result = await createUsers(req);
      res.status(StatusCodes.CREATED).json({
        data: result
    });
  } catch (err) {
      next(err);
  }
};

module.exports = {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers
}