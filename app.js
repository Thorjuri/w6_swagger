const express = require('express');
const app = express();
const port = 3000;
const Router = require('./routes/index.js')
const swaggerUi = require('swagger-ui-express');
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.js')));





app.use("/", Router);





app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });