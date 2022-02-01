const router = require('express').Router();
const {
  getAllComments,
  addComment,
} = require('../controllers/commentContoller');

router.route('/comments').get(getAllComments).post(addComment);

module.exports = router;
