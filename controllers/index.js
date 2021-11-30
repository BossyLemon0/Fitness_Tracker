const router = require('express').Router();

const mainRoute = require('./workoutRoute');

router.use('/api', mainRoute );

module.exports = router;