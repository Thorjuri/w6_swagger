// swaggerDoc.js

const swaggerJSDoc = require('swagger-jsdoc');

var swaggerDefinition = {
    info : { // 정보 작성
        title : "나만의 블로그 API 명세",
        version : "2.0.0",
        description : "swagger 실습. 파일 w6_swagger의 API 명세" 
    },
    host : "localhost:4000", // base-url
    basePath : "/", // base path
    securityDefinitions: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT',
        },
    }
};

var options = {
    swaggerDefinition: swaggerDefinition,
    apis : ['./routes/post.js', './routes/users.js', './routes/comment.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;