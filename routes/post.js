const express = require('express');
const router = express.Router();

const PostController = require('../controller/postController');
const postController = new PostController();

const authMiddleware = require("../middlewares/auth_middleware");


/**
 * @swagger
 * tags:
 *   name: Post
 *   definitions:
 *     description: 게시글
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

// 위와 같이 각 라우트 파일마다 최상단에 태그를 만들어주었습니다.
// definitions에는 Post라는 이름의 object를 만들어주었습니다.
// properties에는 Post object의 각 속성과 타입을 지정해주었습니다.
// images같은 경우 배열 타입인데, 각 요소에 대한 타입은 items:를 통하여 지정해줄 수 있었습니다.



// 아래와 같이 각 route마다 yaml 문서를 작성해주었습니다.
// /posts route에 get요청을 하는 예시 코드입니다. (게시글 전체 조회)
// tags에는 태그명을 넣어주었습니다.
// parameters에는 해당 route의 parameter들을 넣어줍니다.
// in: "query"는 쿼리스트링에 포함된 파라미터를 의미합니다. ex) /posts?category=카테고리1
// 이 외에도 in: "path"는 쿼리 파라미터를 의미하고, in: "body"는 req.body를 의미합니다.
// 자세한 사항은 swagger 관련 문서를 찾아보시면 될 것 같습니다.
// responses: 에는 응답에 관한 사항을 기록해줍니다.
/**
 * @swagger
 * /post/list:
 *   get:
 *     tags:
 *       - Post
 *     description: 게시글 목록 조회
 *     headers:
 *       Accept: "application/json"
 *       authorization: "Bearer token"
 *     produces:
 *     - "application/json"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *       "400":
 *         description: "failed operation"
*/

//게시글 전체 목록
router.get('/list', postController.getPost);



/**
 * @swagger
 * /post/write:
 *   post:
 *     tags:
 *       - Post
 *     description: 게시글 작성
 *     produces:
 *     - "application/json"
 *     headers:
 *       Accept: "application/json"
 *       authorization: "Bearer token"
 *     parameters:
 *     - name: "title"
 *       in: "body"
 *       description: "게시글 내용: 제목, 본문, 글, 비밀번호"
 *       type: "string"
 *     - name: "authorization"
 *       in: "header"
 *       description: "헤더 토큰"
 *       type: "string"
 *     responses:
 *       "200":
 *         description: "successful operation"
 *       "400":
 *         description: "failed operation"      
*/

//게시글 작성
router.post('/write', authMiddleware, postController.createPost);

/**
 * @swagger
 * /post/{:postId}:
 *   get:
 *     tags:
 *       - Post
 *     description: 게시글 상세보기
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: ":postId"
 *       in: "path"
 *       description: "게시글 postId"
 *       type: "integer"
 *     - name: "authorization"
 *       in: "header"
 *       description: "헤더 토큰"
 *       type: "string"
 *     responses:
 *       "200":
 *         description: "successful operation"     
 *       "400":
 *         description: "failed operation"
*/

//게시글 상세보기 
router.get('/:postId', authMiddleware, postController.getPostOne);

/**
 * @swagger
 * /post/{:postId}:
 *   put:
 *     tags:
 *       - Post
 *     description: 게시글 상세보기
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: ":postId"
 *       in: "path"
 *       description: "게시글 postId"
 *       type: "integer"
 *     - name: "body"
 *       in: "body"
 *       description: "수정할 내용"
 *       type: "string"
 *     - name: "authorization"
 *       in: "header"
 *       description: "헤더 토큰"
 *       type: "string"
 *     responses:
 *       "200":
 *         description: "successful operation" 
 *       "400":
 *         description: "failed operation"
*/

//게시글 수정
router.put('/:postId', authMiddleware, postController.updatePost);

/**
 * @swagger
 * /post/{:postId}:
 *   delete:
 *     tags:
 *       - Post
 *     description: 게시글 삭제
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: ":postId"
 *       in: "path"
 *       description: "게시글 postId"
 *       type: "integer"
 *     - name: "inputPassword"
 *       in: "body"
 *       description: "게시글 비밀번호"
 *       type: "string"
 *     - name: "authorization"
 *       in: "header"
 *       description: "헤더 토큰"
 *       type: "string"
 *     responses:
 *       "200":
 *         description: "successful operation"     
 *       "400":
 *         description: "failed operation"
*/

//게시글 삭제
router.delete('/:postId', authMiddleware, postController.deletePost);

/**
 * @swagger
 * /post/{:postId}/like:
 *   put:
 *     tags:
 *       - Post
 *     description: 좋아요 반영 및 취소
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: ":postId"
 *       in: "path"
 *       description: "게시글 postId"
 *       type: "integer"
 *     - name: "authorization"
 *       in: "header"
 *       description: "헤더 토큰"
 *       type: "string"
 *     responses:
 *       "200":
 *         description: "successful operation"     
 *       "400":
 *         description: "failed operation"
*/

//좋아요 반영 및 취소 
router.put('/:postId/like', authMiddleware, postController.updateLike);



module.exports = router;





