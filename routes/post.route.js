const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.post('/post', postController.createPost.bind(postController));
router.get('/post', postController.getPostByUserId.bind(postController));

module.exports = router;