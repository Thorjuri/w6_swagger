const express = require('express');
const router = express.Router();

const CommentController = require('../controller/commentController');
const commentController = new CommentController;

const authMiddleware = require("../middlewares/auth_middleware");

/**
 * @swagger
 * tags:
 *   name: comments
 *   definitions:
 *     description: 코멘트 
 *     Post:
 *       properties:
 *         title:
 *           type: "string"
 *         description:
 *           type: "string"
 *         writer:
 *           type: "string"
 *         category:
 *           type: "string"
 *         price:
 *           type: "integer"
 *           format: "int64"
 *         state:
 *           type: "integer"
 *           format: "int64"
 *         images:
 *           type: "array"
 *           items:
 *             type: "string"
*/


/**
 * @swagger
 *   /comment/{:postId}/write:
 *     post:
 *       tags:
 *         - comments
 *       description: 댓글작성
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *         access-control-allow-origin: "*"
 *       parameters:
 *       - name: ":postId"
 *         in: "path"
 *         description: "게시글 ID"
 *         type: "integer"
 *       - name: "cmtContent"
 *         in: "body"
 *         description: "코멘트 본문"
 *         type: "string"
 *       - name: "authorization"
 *         in: "header"
 *         description: "헤더 토큰"
 *         type: "string"
 *       - name: "access-control-allow-origin"
 *         in: "header"
 *         description: "cors 정책"
 *         type: "string"
 *       responses:
 *         "200":
 *           description: "successful operation"
 *         "400":
 *           description: "failed operation"
*/
//댓글 작성하기
router.post('/:postId/write', authMiddleware, commentController.createComment);

/**
 * @swagger
 *   /comment/{:postId}:
 *     get:
 *       tags:
 *         - comments
 *       description: 댓글 목록 보기
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *         access-control-allow-origin: "*"
 *       parameters:
 *       - name: ":postId"
 *         in: "path"
 *         description: "게시글 ID"
 *         type: "integer"
 *       - name: "authorization"
 *         in: "header"
 *         description: "헤더 토큰"
 *         type: "string"
 *       responses:
 *         "200":
 *           description: "successful operation"
 *         "400":
 *           description: "failed operation"
*/
//댓글목록 보기
router.get('/:postId', commentController.getComment);

/**
 * @swagger
 *   /comment/{:postId}/{:cmtId}:
 *     put:
 *       tags:
 *         - comments
 *       description: 댓글 수정
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *         access-control-allow-origin: "*"
 *       parameters:
 *       - name: ":postId"
 *         in: "path"
 *         description: "게시글 ID"
 *         type: "integer"
 *       - name: ":cmtId"
 *         in: "path"
 *         description: "댓글 ID"
 *         type: "integer"
 *       - name: "cmtContent"
 *         in: "body"
 *         description: "수정할 댓글 본문"
 *         type: "string"
 *       - name: "authorization"
 *         in: "header"
 *         description: "헤더 토큰"
 *         type: "string"
 *       responses:
 *         "200":
 *           description: "successful operation"
 *         "400":
 *           description: "failed operation"
*/
//댓글 수정
router.put('/:postId/:cmtId', authMiddleware, commentController.updateComment);

/**
 * @swagger
 *   /comment/{:postId}/{:cmtId}:
 *     delete:
 *       tags:
 *         - comments
 *       description: 댓글 삭제
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *         access-control-allow-origin: "*"
 *       parameters:
 *       - name: ":postId"
 *         in: "path"
 *         description: "게시글 ID"
 *         type: "integer"
 *       - name: ":cmtId"
 *         in: "path"
 *         description: "댓글 ID"
 *         type: "integer"
 *       - name: "authorization"
 *         in: "header"
 *         description: "헤더 토큰"
 *         type: "string"
 *       responses:
 *         "200":
 *           description: "successful operation"
 *         "400":
 *           description: "failed operation"
*/
//댓글 삭제
router.delete('/:postId/:cmtId', authMiddleware, commentController.deleteComment);


module.exports = router;


