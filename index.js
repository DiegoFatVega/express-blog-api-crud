const express = require(`express`);
const app = express();
const PORT = 3000;

const postRouter = require(`./routes/posts`);

app.listen(PORT, () => {
    console.log(`example app listening on port http://localhost:${PORT}`)
})

app.use(express.json());//body parser, dopo un errore in console `cannot read properties of undefined, ho capito che il bodyu parser va messo PRIMA dell`app.use /posts`

app.use(express.static(`public`)); //asset statici

app.use(`/posts`, postRouter);
