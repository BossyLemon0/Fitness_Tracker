const router = require('express').Router();

const mainRoute = require('./workoutRoute');
const pageRoute = require('./pageRoutes');

router.use('/api', mainRoute );
router.use('/', pageRoute );

module.exports = router;