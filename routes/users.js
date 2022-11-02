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
 *       - name: "body"
 *         in: "body"
 *         description: "회원가입 정보"
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

// 1.회원가입 (Joi validation)
router.post('/', user_validation.user_singup, userController.createUser);

/**
 * @swagger
 *   /users/auth:
 *     post:
 *       tags:
 *         - Users
 *       description: 로그인
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "로그인 정보"
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

//2.로그인(토큰 발급)
router.post('/auth' ,userController.login);

/**
 * @swagger
 *   /users/me:
 *     get:
 *       tags:
 *         - Users
 *       description: 마이페이지
 *       produces:
 *       - "application/json"
 *       headers:
 *         Accept: "application/json"
 *         authorization: "Bearer token"
 *       parameters:
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

// 3. 마이페이지 (내 정보, 좋아요한 글)
router.get('/me', authMiddleware, userController.getUser)


module.exports = router;
