const express = require('express');
const loginRoutes = require('./routers/login.routes');
const userRoutes = require('./routers/user.routes');
const categoryRoutes = require('./routers/category.routes');
const blogPostRoutes = require('./routers/blogPost.routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', blogPostRoutes);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
