const express = require('express');
const cors = require('cors');
const router = express();
const { signinCms } = require('./controller');

router.post('/auth/signin', cors(),signinCms);

module.exports = router;