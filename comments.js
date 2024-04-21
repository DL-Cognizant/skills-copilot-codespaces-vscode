//create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//handle requets to /comments
router.get('/', commentController.getAllComments);
router.post('/', commentController.addComment);
router.get('/:id', commentController.getComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);
