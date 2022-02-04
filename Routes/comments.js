const express = require("express");
const router = express.Router();
const CommentController = require("../Controllers/CommentController");
const {authentication, isAuthor} = require("../middlewares/authentication")

router.post("/",CommentController.create);
router.put("/:_id",authentication, isAuthor, CommentController.update);
router.get('/info',authentication, CommentController.getInfo);

module.exports = router;
