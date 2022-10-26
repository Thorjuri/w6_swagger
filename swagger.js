// swaggerDoc.js

const swaggerJSDoc = require('swagger-jsdoc');

var swaggerDefinition = {
    info : { // 정보 작성
        title : "test API",
        version : "1.0.0",
        description : "grooom-post-server API DOCs" 
    },
    host : "localhost:3000", // base-url
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
    apis : ['./routes/post.js', './routes/users.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;