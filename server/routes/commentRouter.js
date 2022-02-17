const router = require('express').Router();
const {
  getAllComments,
  addComment,
  updateComment,
} = require('../controllers/commentContoller');

router.route('/comments').get(getAllComments).post(addComment);
router.route('/comments/:id').patch(updateComment);
module.exports = router;
