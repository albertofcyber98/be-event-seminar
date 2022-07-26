const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const app = express();

// router
const categoriesRouter = require('./apps/api/v1/categories/router');
const imagesRouter = require('./apps/api/v1/images/router');
const talentsRouter = require('./apps/api/v1/talents/router');
const eventsRouter = require('./apps/api/v1/events/router');
const organizersRouter = require('./apps/api/v1/organizers/router');
const authCMSRouter = require('./apps/api/v1/auth/router');

// middlewares
const notFoundMiddleware = require('./apps/middlewares/not-found');
const handleErrorMiddleware = require('./apps/middlewares/handler-error');

const v1 = '/api/v1/cms';

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to API Event'
    });
});

app.use(v1, categoriesRouter);
app.use(v1, imagesRouter);
app.use(v1, talentsRouter);
app.use(v1, eventsRouter);
app.use(v1, organizersRouter);
app.use(v1, authCMSRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);


module.exports = app;
