const { Router } = require("express");

const {
  createPost,
  deletePost,
  updatePost,
  getAllPost,
  getSinglePost,
} = require("../controllers/posts.controller");

const postRouter = Router();

postRouter.route("/").get(getAllPost).post(createPost);

postRouter
  .route("/:postId")
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePost);

module.exports = postRouter;
