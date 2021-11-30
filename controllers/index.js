const router = require('express').Router();

const mainRoute = require('./workouts');

router.use('/api', mainRoute );

module.exports = router;