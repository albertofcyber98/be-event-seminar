const router = require('express').Router();
const { createCMSOrganizer } = require('./controller');

router.post('/organizers', createCMSOrganizer);

module.exports = router;