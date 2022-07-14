// import services categories
const { getAllCategories, getOneCategories, updateCategories, createCategories, deleteCategories } = require('../../../services/mongoose/categories');
const { StatusCodes } = require('http-status-codes');

const Categories = require('./model');

const create = async (req, res, next) => {
    try {
      let result = await createCategories(req);
        res.status(StatusCodes.CREATED).json({
          data: result
      });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
	try {
		let result = await getAllCategories(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
	} catch (err) {
		next(err);
	}
};

const find = async (req, res, next) => {
    try {
        let result = await getOneCategories(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (err) {
        next(err);
        //  // error validation dari mongoose
        // if (err.name === 'ValidationError') {
        //     customError.msg = Object.values(err.errors)
        //     .map((item) => item.message)
        //     .join(', ');
        //     customError.statusCode = 400;
        // }
    }
}


module.exports = {
    create,
    index,
    find,
    update,
    destroy
}