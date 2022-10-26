const express = require('express');
const router = express.Router();

const UserController = require('../controller/userController');
const userController = new UserController();

const authMiddleware = require("../middlewares/auth_middleware");
const user_validation = require('../validation/user_validation')


/**
 * @swagger
 * tags:
 *   name: Users
 *   definitions:
 *     description: 유저 
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
 *   /users:
 *     post:
 *       tags:
 *         - Users
 *       description: 회원가입
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *       parameters:
 *       - name: "userId"
 *         in: "body"
 *         description: "아이디"
 *         type: "string"
 *       - name: "nickname"
 *         in: "body"
 *         description: "닉네임"
 *         type: "string"
 *       - name: "email"
 *         in: "body"
 *         description: "이메일"
 *         type: "string"
 *       - name: "password"
 *         in: "body"
 *         description: "비밀번호"
 *         type: "string"
 *       - name: "authorization"
 *         in: "header"
 *         description: "헤더 토큰"
 *         type: "string"
 *       responses:
 *         "200":
 *           description: "successful operation"
*/
// 1.회원가입 (Joi validation)
router.post('/', user_validation.user_singup, userController.createUser);


//2.로그인(토큰 발급)
router.post('/auth' ,userController.login);


// 3. 마이페이지 (내 정보, 좋아요한 글)
router.get('/me', authMiddleware, userController.getUser)


module.exports = router;
