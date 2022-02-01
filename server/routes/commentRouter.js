const router = require('express').Router();
const { getAllComments } = require('../controllers/getAllComments');

router.route('/comments').get(getAllComments);

module.exports = router;
