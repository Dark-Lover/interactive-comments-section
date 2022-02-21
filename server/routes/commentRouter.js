const router = require('express').Router();
const {
  getAllComments,
  addComment,
  updateComment,
  addReply,
} = require('../controllers/commentContoller');

router.route('/comments').get(getAllComments).post(addComment);
router.route('/comments/:id').patch(updateComment).post(addReply);
module.exports = router;
