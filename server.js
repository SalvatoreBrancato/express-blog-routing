const  express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const postsRouter = require('./routers/posts');


app.use('/', postsRouter);
app.use('/:slug', postsRouter);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})