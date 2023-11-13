const  express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const postsRouter = require('./routers/posts');

//file statici (immagini nella cartella public)
app.use(express.static('public'));

app.use('/post', postsRouter);


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})