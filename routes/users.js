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



// 1.회원가입 (Joi validation)
router.post('/', user_validation.user_singup, userController.createUser);


//2.로그인(토큰 발급)
router.post('/auth' ,userController.login);


// 3. 마이페이지 (내 정보, 좋아요한 글)
router.get('/me', authMiddleware, userController.getUser)


module.exports = router;
